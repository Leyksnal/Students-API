const StudentData = require('../data/students.json');
const fs = require('fs');

// Read all students
const getStudents = (req, res) =>{
    return new Promise((resolve, reject)=>{
        resolve(StudentData)
    });
}

// writeToFile module
const writeToFile = (filename, content) =>{
    fs.writeFileSync(filename, JSON.stringify(content), (error)=>{
        if(error){
            console.log(error.message);
        }else{
            console.log("Successful");
        }
    })
}



module.exports = {
    getStudents,
    writeToFile
}