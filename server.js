const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Nft = require('./models/nfts')
const nftData = require('./utilities/nftData')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3003

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
    console.log("connected to mongo");
});

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static('public'))

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/api/v1/nfts', (req, res) => {
    Nft.find({}, (err, allNfts) => {
        res.render('Index', {
            nfts: allNfts
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

app.listen(port, () => {
    console.log(`*** Listening on http://localhost:${port}/api/v1/nfts ***`)
})