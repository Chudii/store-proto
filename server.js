const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const connectEnsureLogin = require('connect-ensure-login')
const LocalStrategy = require('passport-local').Strategy
const passportLocalMongoose = require('passport-local-mongoose')
// const initializePassport = require('./utilities/passport-config')
// initializePassport(passport, username => users.find(user => user.username === username))
const Nft = require('./models/nfts')
const User = require('./models/user')
const nftData = require('./utilities/nftData')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3003

const secret = process.env.JWT_SECRET

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
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 }
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

app.get('/api/v1/nfts/new', (req, res) => {
    res.render('New')
})

// app.get('/api/v1/nfts/change-password', (req, res) => {
//     res.render('Change-Pasword')
// })

// // USER ROUTE
// app.post('/api/v1/nfts/change-password', async (req, res) => {
//     const { token, newPassword: plainTextPassword } = req.body

//     if (!plainTextPassword || typeof plainTextPassword !== 'string') {
//         return res.json({ status: 'error', error: 'Invalid Password' })
//     }

//     if (plainTextPassword.length < 6) {
//         return res.json({ status: 'error', error: 'Password is too small. Should be at least 6 characters' })
//     }

//     try {
//         const user = jwt.verify(token, secret)
//         const _id = user.id
        
//         const password = await bcrypt.hash(plainTextPassword, 10)

//         await User.updateOne(
//             { _id },
//             {
//                 $set: { password }
//             }
//         )
//         res.json({ status: 'ok' })
//     } catch (error) {
//         res.json({ status: 'error ', error: 'Some error'})
//     }
    

//     res.json({ status: 'ok' })
// })

// USER ROUTE
app.get('/api/v1/nfts/login', (req, res) => {
    res.render('Login')
})

// USER ROUTE
app.post('/api/v1/nfts/login', passport.authenticate('local', {
        failureRedirect: '/api/v1/nfts/login',
    }
), (req, res) => {
    console.log(req.user)
    res.redirect('/api/v1/nfts')
})


// {
//     const { username, password } = req.body
//     const user = await User.findOne({ username }).lean()

//     if (!user) {
//         return res.json({ status: 'error', error: 'Invalid Username or Password'})
//     }

//     if (await bcrypt.compare(password, user.password)) {
//         const token = jwt.sign({ id: user._id, username: user.username }, secret)
//         res.json({ status: 'ok'})
//     }

//     res.json({ status: 'error', error: 'Invalid Username or Password' })
// })

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

// USER ROUTE
// app.post('/api/v1/nfts/register', async (req, res) => {

//     const { username, password: plainTextPassword } = req.body

//     if (!username || typeof username !== 'string') {
//         return res.json({ status: 'error', error: 'Invalid Username' })
//     }

//     if (!plainTextPassword || typeof plainTextPassword !== 'string') {
//         return res.json({ status: 'error', error: 'Invalid Password' })
//     }

//     if (plainTextPassword.length < 6) {
//         return res.json({ status: 'error', error: 'Password is too small. Should be at least 6 characters' })
//     }

//     const password = await bcrypt.hash(plainTextPassword, 10)
//     try {
//         const response = await User.create({
//             username,
//             password
//         })
//         res.redirect('/api/v1/nfts/login')
//         console.log('User created successful: ', response)
//     } catch (error) {
//         if (error.code === 11000) {
//             // duplicate key
//             return res.json({ status: 'error', error: 'Username already in use' })
//         }
//         res.redirect('/api/v1/nfts/register')
//         throw error
//     }
//     res.json({ status: 'ok' })
// })


app.get('/api/v1/nfts/:id', (req, res) => {
    Nft.findById(req.params.id, (err, foundNft) => {
        res.render('Show', {
            nft: foundNft
        })
    })
})

app.get('/api/v1/nfts/:id/edit', (req, res) => {
    Nft.findById(req.params.id, (err, foundNft) => {
        if (!err) {
            res.render('Edit', {
                nft: foundNft
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
        res.redirect(`/api/v1/nfts/${req.params.id}`)
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