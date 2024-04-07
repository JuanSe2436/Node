const express = require('express');
//instanciar el elemento
const app = express();

app.get('/', (req, res) => {
    res.send('HOLA MUNDO DESDE EXPRESS.');
});  //PETICION

app.get('/api/usuarios', (req, res) => {
    res.send(['sebas', 'luis', 'ana'])
});
//SE AGREAGN 2 PUNTOS PARA QUE ENTIENDA QUE ES UN VALOR QUE SE TIENE QUE OBTENER PARA UNA 
//PARAMETRIZACION
app.get('/api/usuarios/:year/:mes', (req, res) => {
    res.send(req.query)
});

//VARIABLES DE ENTORNO PARA EL PUERTO
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}...`);
})
// app.post(); //ENVIO DE DEATOS
// app.put();  //ACTUALIZACION
// app.delete(); //ELIMINACION


