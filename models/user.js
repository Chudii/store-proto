const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        joined: { type: Date, default: Date },
        purchased: [{ name: String, quantity: Number, img: String, price: Number }]
    }, 
    { collection: 'users' }
)

userSchema.plugin(passportLocalMongoose)

userSchema.methods.comparePassword = function(candidatePassword, hash, cb) {
    bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
        if (err) return cb(err)
        cb(null, isMatch)
    })
}

const User = mongoose.model('User', userSchema)

module.exports = User