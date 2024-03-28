// const dato = require('./Datos');

// dato('Hola Mundo')

// console.log(module);

// const path = require('node:path');

// const objPath = path.parse(__filename)

// console.log(objPath.name);

// console.log(__filename);
// console.log(__dirname);


const os = require('os');

var memoriaLibre = os.freemem();
var memoriaTotal = os.totalmem();

console.log(`Memoria libre: ${memoriaLibre}`)
console.log(`Memoria total: ${memoriaTotal}`)

