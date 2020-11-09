//const { rejects } = require('assert');
const fs = require('fs');
const colors = require('colors');
const { basename } = require('path');

let imprimirTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(colors.red(`El valor introducido '${base}' no es un numero`));
            return;
        }

        console.log("----------------------".green);
        console.log(`Tabla de multiplicar - ${base}`.green);
        console.log("----------------------".green);

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} x ${i} = ${base * i}`);
        }
    });
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido '${base}' no es un numero`);
            return;
        }
        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }



        fs.writeFile(`tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            resolve(`El archivo tabla-${base}.txt ha sido creado`);

        });

    })
}
module.exports = {
    crearArchivo,
    imprimirTabla
}