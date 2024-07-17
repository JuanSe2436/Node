const express = require('express');
//instanciar el elemento
const app = express();

app.use(express.json());

var usuarios = [
    { id: 1, nombre: 'Grover' },
    { id: 2, nombre: 'Sebastian' },
    { id: 3, nombre: 'Juan' }

];

