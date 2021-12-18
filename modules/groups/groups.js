const { getGroups } = require('./model')

module.exports = {
    groups: async(req, res) => {
        try {
            let newGroups = []
            let superGroup = []
            let result = []
            const allGroups = await getGroups()
            for(let i=0; i<allGroups.length; i++){
                let obj = {}
                obj.group_name = allGroups[i].group_name
                obj.teacher_name = allGroups[i].teacher_name
                obj.student_name = [allGroups[i].student_name]
                for(let j=i+1; j<allGroups.length; j++){
                    if(allGroups[i].group_name == allGroups[j].group_name){
                        obj.student_name.push(allGroups[j].student_name)      
                    }
                }
                newGroups.push(obj)
            }
            newGroups.forEach(item => {
                if(!superGroup.includes(item.group_name)){
                    superGroup.push(item.group_name)
                    result.push(item)
                }
            })
            res.json(result)
        } catch(e) {
            console.log(e.message)
        }
    }
}