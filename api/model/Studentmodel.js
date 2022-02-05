const StudentData = require('../data/students.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid')

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

// create  Students
const createStudent = (student) =>{
    return new Promise((resolve, reject)=>{
        const studentID = {id: uuidv4(), ...student}
        StudentData.push(studentID)
        writeToFile('../data/students.json', StudentData)
        resolve(studentID)
    });
}

module.exports = {
    getStudents,
    writeToFile,
    createStudent
}