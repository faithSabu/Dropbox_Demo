const USERS = require('../model/userSchema').users
const userServices = require('../services/userServices')
const bcrypt = require('bcrypt')

module.exports = {
    signup: async (req, res) => {
        try {
            let userInfo = req.body
            let userExist = await (await userServices.checkUserExist(userInfo.email)).toString()
            console.log(userExist, 'userExist');
            if (userExist) {
                return res.json({ userExist: true })
            }
            bcrypt.hash(userInfo.password, 10).then(hash => {
                userInfo.password = hash
                USERS.create(userInfo).then(resp => {
                    return res.json({ registered: true })
                })
            })
        } catch (error) {
            console.log(error);
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            let user = await userServices.checkUserExist(email)
            console.log(user)
            if (user) {
                console.log(password, user.password);
                bcrypt.compare(password, user[0].password).then(resp => {
                    if (resp) {
                        console.log(resp);
                        return res.json({user})
                    } else return res.json({ invalidUser: true })
                })
            } else {
                return res.json({ invalidUser: true })
            }
        } catch (error) {
            console.log(error);
        }
    }
}