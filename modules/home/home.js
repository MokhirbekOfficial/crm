const { mainadmin } = require('./model')
const secret_key = 'CRM'
const jwt = require('jsonwebtoken')

module.exports = {
    authorither: async(req, res) => {
        try {
            const {token} = req.body
            const allUsers = await mainadmin()
            const decoded = jwt.verify(token, secret_key)
            res.json('ok')
        } catch(e) {
            console.log(e.message)
            res.json('false')
        }
    }
}