const { fetch, fetchAll } = require('../../lib/postgress')

const courses = `
SELECT
    course_name,
    course_cost,
    teacher_name
FROM
    courses
LEFT JOIN  course_teacher
    ON course_ref_id = course_id
LEFT JOIN teachers
    ON teacher_ref_id = teacher_id
ORDER BY course_id;
`

const newCourse = `
    INSERT INTO courses(course_name, course_cost) VALUES($1,$2);
`

const getCourses = () => fetchAll(courses)

const newCourses = (course_name, course_cost) => fetch(newCourse, course_name, course_cost)

module.exports = {
    getCourses,
    newCourses
}