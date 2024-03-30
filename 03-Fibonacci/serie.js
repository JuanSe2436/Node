//APP DE FIBONACCI
//1 1 2 3 5 8 13 21 34...

const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");
//DEBEMOS MANDARLE LA CANTIDAD DE ELEMENTOS QUE QUEREMOS EN
//NUESTRA SERIE
let crearSerie = (cantidad) => {
    //SE CREA UNA PROMESA PARA ASI ENVIAR UN MENSAJE DE VUELTA
    //EN EL RETURN
    return new Promise((resolve, rejects) => {
        let fibo1 = 1;
        let fibo2 = 1;
        let serie = "";

        serie += `${fibo1}\n`;
        for (let i = 2; i <= cantidad; i++) {
            serie += `${fibo2}\n`;
            fibo2 = fibo1 + fibo2;
            fibo1 = fibo2 - fibo1;
        }
        //CAMBIOS IMPORTANTES EN EL CODIGO
        fs.writeFile("fibonacci.txt", serie, (err) => {
            if (err)
                rejects("Error al crear el archivo");
            else
                resolve("El archvo fue creado con exito");
        });
    })

}
//FUNCION PARA EXPORTAR
module.exports = {
    crearSerie
}
