//APP DE FIBONACCI
//1 1 2 3 5 8 13 21 34...

const fs = require('fs');

let fibo1 = 1;
let fibo2 = 1;
let serie = '';

serie += `${fibo1}\n`
for (let i = 2; i <= 8; i++) {
    serie += `${fibo2}\n`
    fibo2 = fibo1 + fibo2;
    fibo1 = fibo2 -fibo1;
}

fs.writeFile('fibonacci.txt', serie, (err) => {
  if (err) throw err;
  console.log('El archvo fue creado con exito');
});