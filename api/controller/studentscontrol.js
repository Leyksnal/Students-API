const studentsControl = require('../model/Studentmodel')


// Read all students
const callStudents = async (req, res) =>{
    try{
        const details = await studentsControl.getStudents();
        res.writeHeader(200, 'Content-Type', 'application/json')
        res.end(JSON.stringify(details))
    }catch(err){
        console.log(err.message);
    }
}

// create students
const createStudent = async (req, res) => {
    try{
        let body = ''
        req.on('data', function(chunk){
            body += chunk.toString()
        })
        req.on('end', async function(){
            const {name, course, year} = JSON.parse(body)
            const bodyData = {
                name,
                course,
                year
            }
            const newStudent = await studentsControl.createStudent(bodyData)
            res.writeHeader(201, {'Content-Type': 'application/json'})
            res.end(JSON.stringify(newStudent))
        })
    }catch(error){
        console.log(error.message);
    }
}

module.exports={
    callStudents,
    createStudent
}