const { fetch, fetchAll } = require('../../lib/postgress')

const groups = `
SELECT
    group_name,
    teacher_name,
    student_name
FROM
    groups
LEFT JOIN  students
    ON student_group = group_id
LEFT JOIN teachers
    ON teacher_id = group_teacher
ORDER BY group_name;
`

// const NEW_USER = `
//     INSERT INTO users(user_name) VALUES($1) RETURNING *
// `

const getGroups = () => fetchAll(groups)

module.exports = {
    getGroups
}