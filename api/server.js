const http = require('http')
const port = 1999
const { callStudents, createStudent } = require('./controller/studentscontrol')

const server = http.createServer((req, res)=>{
    if(req.url === "/api/students" && req.method === "GET"){
        res.setHeader('Content-Type', 'application/json')
        callStudents(req, res)
    }else if(req.url === "/api/students/abstract" && req.method === "POSt"){
        res.setHeader({'Content-Type': 'application/json'})
        createStudent(req, res)
    }else{
        res.writeHead(400, {'Content-Type': 'application/json'})
        console.log("Bad request")
        res.end(JSON.stringify({"message": "Your request cannot be processed"}))
    }
});

server.listen(port, ()=>{
    console.log("Your server is running" + 1999);
})