const { getStudents } = require('./model')

module.exports = {
    students: async(req, res) => {
        try {
            const allStudents = await getStudents()
            res.json(allStudents)
        } catch(e) {
            console.log(e.message)
        }
    }
}