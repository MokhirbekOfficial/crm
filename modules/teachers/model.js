const { fetch, fetchAll } = require('../../lib/postgress')

const teachers = `
SELECT
    teacher_name,
    teacher_age,
    course_name,
    group_name,
    salary_amount
FROM
    teachers
LEFT JOIN  course_teacher
    ON teacher_ref_id = teacher_id
LEFT JOIN courses
    ON course_ref_id = course_id
LEFT JOIN groups
    ON teacher_id = group_teacher
LEFT JOIN students
    ON group_id = student_group
LEFT JOIN salary
    ON student_id = salary_owner
ORDER BY teacher_name;
`

// const NEW_USER = `
//     INSERT INTO users(user_name) VALUES($1) RETURNING *
// `

const getTeachers = () => fetchAll(teachers)

module.exports = {
    getTeachers
}