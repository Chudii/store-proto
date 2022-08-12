const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const bcrypt = require('bcryptjs')
const bodyParser = require('body-parser')
const passport = require('passport')
const session = require('express-session')
const connectEnsureLogin = require('connect-ensure-login')
const LocalStrategy = require('passport-local').Strategy

const Nft = require('./models/nfts')
const User = require('./models/user')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3003

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once("open", () => {
    console.log("connected to mongo");
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 }
}))
app.use(passport.initialize())
app.use(passport.session())

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// PASSPORT
passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({ username: username }, async function (err, user) {
            if (err) { return done(err) }
            if (!user) { return done(null, false, { message: `User not found.` }) }
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user)
            }
        })
    }
))

app.get('/api/v1/nfts', connectEnsureLogin.ensureLoggedIn('/api/v1/nfts/login'), (req, res) => {
    Nft.find({}, (err, allNfts) => {
        res.render('Index', {
            nfts: allNfts,
            username: req.user.username
        })
    })
})

app.post('/api/v1/nfts', (req, res) => {
    Nft.create(req.body, (err, createdNft) => {
        res.redirect('/api/v1/nfts')
    })
})

app.get('/api/v1/nfts/new', connectEnsureLogin.ensureLoggedIn('/api/v1/nfts/login'), (req, res) => {
    res.render('New', { 
        username: req.user.username
    })
})

// USER ROUTE
app.get('/api/v1/nfts/login', (req, res) => {
    res.render('Login')
})

// USER ROUTE
app.post('/api/v1/nfts/login', passport.authenticate('local', {
        failureRedirect: '/api/v1/nfts/login',
    }
), (req, res) => {
    res.redirect('/api/v1/nfts')
})

// USER ROUTE 
app.get('/api/v1/nfts/register', (req, res) => {
    res.render('Register')
})

app.post('/api/v1/nfts/register', async (req, res) => {
    const { username, password: plainTextPassword } = req.body

    if (!username || typeof username !== 'string') {
        return res.json({ status: 'error', error: 'Invalid Username' })
    }

    if (!plainTextPassword || typeof plainTextPassword !== 'string') {
        return res.json({ status: 'error', error: 'Invalid Password' })
    }

    if (plainTextPassword.length < 6) {
        return res.json({ status: 'error', error: 'Password is too small. Should be at least 6 characters' })
    }

    try {
        const password = await bcrypt.hash(plainTextPassword, 10)
        const response = await User.create({
            username,
            password
        })
        res.redirect('/api/v1/nfts/login')
        console.log('User succesfully created')
    } catch {
        res.redirect('/api/v1/nfts/register')
    }
})

app.get('/api/v1/nfts/profile', connectEnsureLogin.ensureLoggedIn('/api/v1/nfts/login'), (req, res) => {
    res.render('Profile', {
        user: req.user
    })
})

app.get('/api/v1/nfts/:id/receipt', async (req, res) => {
    Nft.findById(req.params.id, (errOne, foundNft) => {
        if (errOne) throw new Error(errOne)
        User.updateOne({ _id: req.user._id }, { $push: { purchased: { name: foundNft.name, img: foundNft.img, price: foundNft.price } } }, (errTwo, foundUser) => {
            if (errTwo) throw new Error(errTwo)
            res.render('Receipt', {
                nft: foundNft,
                user: req.user
            })
        })
    })
    
})

app.put('/api/v1/nfts/:id/checkout', (req, res) => {
    Nft.findByIdAndUpdate(req.params.id, { $inc: { quantity: -(req.body.quantity) } },(errOne, foundNft) => {
        if (errOne) throw new Error(errOne)
        User.updateOne({ _id: req.user._id }, { $push: { itemAmount: { quantity: req.body.quantity } } }, (errTwo, foundUser) => {
            if (errTwo) throw new Error(errTwo)
            res.redirect(`/api/v1/nfts/${req.params.id}/receipt`)
        })   
    })
})

app.get('/api/v1/nfts/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next()
        }
    })
    res.redirect('/api/v1/nfts/login')
})

app.get('/api/v1/nfts/:id/checkout', connectEnsureLogin.ensureLoggedIn('/api/v1/nfts/login'), (req, res) => {
    Nft.findById(req.params.id, (err, foundNft) => {
        res.render('Checkout', {
            nft: foundNft,
            user: req.user
        })
    })
})

app.get('/api/v1/nfts/:id', connectEnsureLogin.ensureLoggedIn('/api/v1/nfts/login'), (req, res) => {
    Nft.findById(req.params.id, (err, foundNft) => {
        res.render('Show', {
            nft: foundNft,
            username: req.user.username
        })
    })
})

app.get('/api/v1/nfts/:id/edit', connectEnsureLogin.ensureLoggedIn('/api/v1/nfts/login'), (req, res) => {
    Nft.findById(req.params.id, (err, foundNft) => {
        if (!err) {
            res.render('Edit', {
                nft: foundNft,
                username: req.user.username
            })
        } else {
            res.send({ message: err.message })
        }
    })
})

app.put('/api/v1/nfts/:id', (req, res) => {
    Nft.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (err, nft) => {
        res.redirect(`/api/v1/nfts`)
    })
})

app.delete('/api/v1/nfts/:id', (req, res) => {
    Nft.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/api/v1/nfts')
    })
})

app.listen(port, () => {
    console.log(`*** Listening on http://localhost:${port}/api/v1/nfts ***`)
})