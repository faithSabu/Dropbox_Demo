const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email:String,
    name:String,
    password:String,
    createdAt:{
        type:Date,
        default: () => Date.now()
    }
})

const users = mongoose.model('users',userSchema)

module.exports = {
    users
}