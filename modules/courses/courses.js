const { getCourses, newCourses } = require('./model')

module.exports = {
    courses: async(req, res) => {
        try {
            let newCourses = []
            let superNewCourses = []
            let result = []
            const allCourses = await getCourses()
            for(let i=0; i<allCourses.length; i++){
                let obj = {}
                obj.course_name = allCourses[i].course_name
                obj.course_cost = allCourses[i].course_cost
                obj.teacher_name = [allCourses[i].teacher_name]
                for(let j=i+1; j<allCourses.length; j++){
                    if(allCourses[i].course_name == allCourses[j].course_name){
                                obj.teacher_name.push(allCourses[j].teacher_name)
                    }
                }
                newCourses.push(obj)
            }
            newCourses.forEach(item => {
                if(!superNewCourses.includes(item.course_name)){
                    superNewCourses.push(item.course_name)
                    result.push(item)
                }
            })
            res.json(result)
        } catch(e) {
            console.log(e.message)
        }
    },
    addCourses: async(req, res) => {
        try {
            let {course_name, course_cost} = req.body
            let checker = true
            const allCourses = await getCourses()
            allCourses.forEach(item => {
                if(course_name == item.course_name){
                    checker = false
                }
            })
            if(checker){
                await newCourses(course_name, course_cost)
                res.json('created')
            }else{
                res.json('This course already created')
            }
        } catch(e) {
            console.log(e.message)
        }
    }

}