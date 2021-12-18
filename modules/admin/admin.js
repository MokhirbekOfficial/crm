const { mainadmin } = require('./model')
const secret_key = 'CRM'
const jwt = require('jsonwebtoken')

module.exports = {
    mainadmin: async(req, res) => {
        try {
            const {mainadmin_login,mainadmin_password} = req.body
            const allUsers = await mainadmin()
            if(allUsers[0].mainadmin_login == mainadmin_login && allUsers[0].mainadmin_password == mainadmin_password){
                const login = allUsers[0].mainadmin_login
                const email = allUsers[0].mainadmin_id
                const token = jwt.sign({login, email}, secret_key)
                res.json(token)
            }else{
                res.json('false')
            }
        } catch(e) {
            console.log(e.message)
        }
    }
}