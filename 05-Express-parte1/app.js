const express = require('express');
//instanciar el elemento
const app = express();

app.get('/', (req, res) => {
    res.send('HOLA MUNDO DESDE EXPRESS.');
});  //PETICION

app.get('/api/usuarios', (req, res) => {
    res.send(['sebas', 'luis', 'ana'])
});

app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000...');
});
// app.post(); //ENVIO DE DEATOS
// app.put();  //ACTUALIZACION
// app.delete(); //ELIMINACION


