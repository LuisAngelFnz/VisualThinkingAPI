const express = require('express');
const StudentsController = require('./controllers/StudentsController');

const server = express();

server.use(express.json());

const port = 3000;

server.get('/v1/students/all', (request, response)=>{
    console.log(`[${new Date()}] Api VisualThinkingAPI [M] GET [F] getAllStudents [P]`);
    const result = StudentsController.getAllStudents()
    response.status(200).json({'students':result});
});


server.get('/v1/students/mailHaveCertification', (request, response)=>{
    console.log(`[${new Date()}] Api VisualThinkingAPI [M] GET [F] getMailsByhaveCertification [P]`);
    const result = StudentsController.getMailsByhaveCertification()
    response.status(200).json({'studentsMail':result});
});


server.get('/v1/students/creditsGt500', (request, response)=>{
    console.log(`[${new Date()}] Api VisualThinkingAPI [M] GET [F] getStudentsCreditsGt500 [P]`);
    const result = StudentsController.getStudentsCreditsGt500()
    response.status(200).json({'students':result});
});

server.listen(port, () => {
 console.log(`Init Server Api VisualThinkingAPI, listening on port ${port}`)
});