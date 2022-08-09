const mongoose = require('mongoose')

const nftSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true }
})

const Nft = mongoose.model('Nft', nftSchema)

module.exports = Nft