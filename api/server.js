const http = require('http')
const port = 1999
const readAllStudents = require('./controller/studentscontrol')

const server = http.createServer((req, res)=>{
    if(req.url === "/api/students" && req.method === "GET"){
        res.setHeader('Content-Type', 'application/json')
        readAllStudents.callStudents(req, res);
    }else{
        res.writeHead(400, {'Content-Type': 'application/json'})
        console.log("Bad request")
        res.end(JSON.stringify({"message": "Your request cannot be processed"}))
    }
});

server.listen(port, ()=>{
    console.log("Your server is running" + 1999);
})