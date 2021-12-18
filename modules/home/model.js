const { fetch, fetchAll } = require('../../lib/postgress')

const mainadmins = `
    SELECT 
        * 
    FROM
        mainadmin
`

// const NEW_USER = `
//     INSERT INTO users(user_name) VALUES($1) RETURNING *
// `

const mainadmin = () => fetchAll(mainadmins)

module.exports = {
    mainadmin
}