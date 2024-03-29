// const dato = require('./Datos');

// dato('Hola Mundo')

// console.log(module);

// const path = require('node:path');

// const objPath = path.parse(__filename)
//MODULO PATH
// console.log(objPath.name);

// console.log(__filename);
// console.log(__dirname);

//MODULO OS
// const os = require('os');

// var memoriaLibre = os.freemem();
// var memoriaTotal = os.totalmem();

// console.log(`Memoria libre: ${memoriaLibre}`)
// console.log(`Memoria total: ${memoriaTotal}`)


// MODULO DE FILE SYSYEM
// const fs = require('fs');

// const archivos = fs.readdirSync('./');
// console.log(archivos);
//EN ESTE CASO SE HACE DE MANERA ASYNCRONA ASINCORNO: La programación asíncrona es una técnica que permite a tu programa iniciar una tarea de larga duración
//y seguir respondiendo a otros eventos mientras esa tarea se ejecuta, en lugar de tener que esperar hasta que esa tarea haya terminado
// fs.readdir('./', function (err, files) {
//     if (err) console.log('Error', err);
//     else console.log('Resultado', files);
// })

// MODULO EVENTS

// const eventEmitter = require('events');
// const emitter = new eventEmitter();

//REGISTRAR EL LISTENER // REGISTRAR EL EVENTO

// emitter.on('mensajeLoger', (arg) => {
//     console.log('Listener llamado...', arg)
// })
// emitter.emit('mensajeLoger', { id: 1, url: 'http://prueba.com' });


//MODULO HTTP
// const http = require('http');
// const server = http.createServer();

// server.on('connection', (puerto) => {
//     console.log('Nueva conexion...');
// })

// server.listen(3000);

// console.log('Servidor escucchando en el puerto 3000..')

//MODULO HTTP 2
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hola mundo');
        res.end();
    }

    if (req.url === '/api/productos') {
        res.write(JSON.stringify(['mouse', 'teclado', 'parlante']))
        res.end();
    }
});

server.listen(3000);

console.log('Servidor escuchadno en el puerto 3000....')