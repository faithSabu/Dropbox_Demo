const USERS = require('../model/userSchema').users

module.exports = {
    checkUserExist:async(email)=>{
        return (await USERS.find({email:email}))
    },

    // createUser:(userInfo)=>{
    //     USERS.create
    // }
}