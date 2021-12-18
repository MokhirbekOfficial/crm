const { getTeachers } = require('./model')

module.exports = {
    teachers: async(req, res) => {
        try {
            
            let newTeachers = []
            let supernewTeachers = []
            let result = []
            const allTeachers = await getTeachers()
            for(let i=0; i<allTeachers.length; i++){
                let obj = {}
                obj.teacher_name = allTeachers[i].teacher_name
                obj.teacher_age = allTeachers[i].teacher_age
                obj.course_name = [allTeachers[i].course_name]
                obj.group_name = [allTeachers[i].group_name]
                for(let j=i+1; j<allTeachers.length; j++){
                    if(allTeachers[i].teacher_name == allTeachers[j].teacher_name){
                                if(!(obj.course_name.includes(allTeachers[j].course_name))){
                                    obj.course_name.push(allTeachers[j].course_name)
                                }
                                if(!obj.group_name.includes(allTeachers[j].group_name)){
                                    obj.group_name.push(allTeachers[j].group_name)
                                }     
                    }
                }
                newTeachers.push(obj)
            }
            newTeachers.forEach(item => {
                if(!supernewTeachers.includes(item.teacher_name)){
                    supernewTeachers.push(item.teacher_name)
                    result.push(item)
                }
            })
            res.json(result)
        } catch(e) {
            console.log(e.message)
        }
    }
}