const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//Jacked Denny, the club Bouncer
// const userSchema = new mongoose.Schema({
//     userName: { type: String, require: true }, 
//     userPassword: { type: String, require: true }, 
//     idNum: { type: Number, require: true },
//     correctPassword: Boolean
// })

// const User = mongoose.model('User', userSchema)

// module.exports = User

const userSchema = new mongoose.Schema({
    name: String, 
    email: String, 
    password: String
}) 

userSchema.pre('save', async function (next) {
    if (this.isModified()){
        this.password = await bcrypt.hash(this.password, 8)
    }
    next()
}) 

userSchema.methods.generateAuthToken = async function () {
    const token = jwt.sign({ _id: this._id }, 'secret')
    return token 
}

const User = mongoose.model('User', userSchema)

module.exports = user 