const server = require('./app')

//setting eniroment variables
var app_port = process.env.app_port || process.env.PORT ||8000;
var app_host = process.env.app_host || '127.0.0.1';


//starting server on given port
server.listen(app_port,app_host,()=>console.log(`server up @ ${app_host}:${app_port}`))