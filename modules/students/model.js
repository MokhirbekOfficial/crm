const { fetch, fetchAll } = require('../../lib/postgress')

const students = `
SELECT
    student_name,
    group_name,
    teacher_name,
    salary_amount
FROM
    students
LEFT JOIN  groups
    ON student_group = group_id
LEFT JOIN teachers
    ON teacher_id = group_teacher
LEFT JOIN salary
    ON student_id = salary_owner
ORDER BY student_name;
`

// const NEW_USER = `
//     INSERT INTO users(user_name) VALUES($1) RETURNING *
// `

const getStudents = () => fetchAll(students)

module.exports = {
    getStudents
}