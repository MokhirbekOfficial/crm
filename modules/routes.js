const { Router } = require('express')

const router = new Router()

const admin = require('./admin/admin')
const courses = require('./courses/courses')
const authorither = require('./home/home')
const teachers = require('./teachers/teachers')
const groups = require('./groups/groups')
const students = require('./students/students')

router
    .post('/admin', admin.mainadmin)
    .post('/', authorither.authorither)
    .post('/courses', courses.addCourses)
    .get('/', courses.courses)
    .get('/teachers', teachers.teachers)
    .get('/groups', groups.groups)
    .get('/students', students.students)

module.exports = router