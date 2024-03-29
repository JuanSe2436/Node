// // var nombre = "Sebastian";
// // console.log(nombre);
// // nombre = " Juan";
// // console.log(nombre);

// //Funcion flecha

// const years = [2000, 2005, 2008, 2012];

// var edad5 = years.map(function (el) {
//   return 2019 - el;
// });

// console.log(edad5);

// // funciones en ES6 DE TIPO FLECHA
// let edad6 = years.map((el) => {
//   return 2019 - el;
// });
// console.log(edad6);
// FUNCIONES CALLBACK
// function Mensaje(callback) {
//   console.log("Mensaje antres de la llamada callback.");
//   callback();
// }
// function Saludo() {
//   console.log("Saludo despues de la llamada callback.");
// }
// Mensaje(Saludo);

// function Sumar(num1, num2, callback) {
//   let resultado = num1 + num2;
//   callback(resultado);
// }
// function Resultado(res) {
//   console.log(res);
// }
// Sumar(5, 8, Resultado);

// PROMESA
function Mensaje () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) resolve('Esto se va a ejecutar despues de 3 segundos')
      else reject('Hubo un error.')
    }, 3000)
  })
}

Mensaje.then(msj => {
  console.log(msj)
}).catch(error => {
  console.log(error)
})
