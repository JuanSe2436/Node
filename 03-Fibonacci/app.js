//APP DE FIBONACCI
//1 1 2 3 5 8 13 21 34...
const serie = require('./serie');



//NOS MUESTRA DOS ELEMENTOS, ARCHIVOS Y LA RUTA
let argv = process.argv;
let valor = argv[2].split('=')[1];
console.log(valor);

//SE MANEJA COMO UNA PROMESA LO QUE RECIBE
//SE LLAMA EL METODO crearSerie Y SE LE PONEN LAS CONDICIONES
//EN CASO DE QUE FALLE EL CODIGO "entrará al catch" EN CASO 
//DE QUE FUNCIONE "entrará al then"

let cantidad = valor;

serie.crearSerie(cantidad)
    .then(mensaje => console.log(mensaje))
    .catch(mensaje => console.log(mensaje))