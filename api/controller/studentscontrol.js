const studentsControl = require('../model/Studentmodel')

const callStudents = async (req, res) =>{
    try{
        const details = await studentsControl.getStudents();
        res.writeHeader(200, 'Content-Type', 'application/json')
        res.end(JSON.stringify(details))
    }catch(err){
        console.log(err.message);
    }
}

module.exports={
    callStudents
}