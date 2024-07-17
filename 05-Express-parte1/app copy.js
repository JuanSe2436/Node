const express = require('express');
//instanciar el elemento
const app = express();

app.use(express.json());

var usuarios = [
    { id: 1, nombre: 'Grover' },
    { id: 2, nombre: 'Sebastian' },
    { id: 3, nombre: 'Juan' }

];

app.get('/', (req, res) => {
    res.send('HOLA MUNDO DESDE EXPRESS.');
});  //PETICION

app.get('/api/usuarios', (req, res) => {
    res.send(['sebas', 'luis', 'ana'])
});
//SE AGREAGN 2 PUNTOS PARA QUE ENTIENDA QUE ES UN VALOR QUE SE TIENE QUE OBTENER PARA UNA 
//PARAMETRIZACION
app.get('/api/usuarios/:id', (req, res) => {
    let usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if (!usuario) res.status(404).send('El usuario no fue encontrado');
    res.send(usuario);
});

app.post('/api/usuarios/', (req, res) => {
    if (!req.body.nombre) {
        //400 bad request
        res.status(400).send('Debe ingresar un nombre para validar')
        return;
    }
    const usuario = {
        id: usuarios.length + 1,
        nombre: req.body.nombre
    };
    usuarios.push(usuario);
    res.send(usuario);
});


//VARIABLES DE ENTORNO PARA EL PUERTO
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}...`);
})

function existeUsuario(id) {
  return usuarios.find((u) => u.id === parseInt(id));
}

function validarUsuario(nom) {
  const schema = Joi.object({
    nombre: Joi.string().min(3).required(),
  });
  return schema.validate({ nombre: nom });
}

// app.post(); //ENVIO DE DEATOS
// app.put();  //ACTUALIZACION
// app.delete(); //ELIMINACION


