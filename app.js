/*
Fs = file system
importar el módulo (paquete)
·Con const fs declaramos una constante que hará referencia al modulo fs
const fs = require('fs');
·Aplicacion para generar tablas de multiplicar
·Declaramos base y altura
let base = 5;
let data = "";
·Declaramos un for 
for (let i = 1; i <= 10; i++) {
    ·Usamos += para concatenar una cadena con algo mas
    data += `${base} x ${i} = ${base * i} \n`;
}
·Con fs.write podremos crear un archivo txt
·Con err estamos declarando un callback para que al momento que reciba un
·error nos traiga algo
fs.writeFile(`tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base}.txt ha sido creado`);
});
*/
/////////////////////////////
/*
const { argv } = require('process');
const yargs = require('yargs');
const { crearArchivo, imprimirTabla } = require('./multiplicar/multiplicar');
//const multiplicar = require('./multiplicar/multiplicar.js')
//let argv = process.argv
//let parametro = argv[2];

let comando = yarg._[0];

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(mensaje => {
                console.log(mensaje);
            }).catch(e => {
                console.log(e);
            });
        break;
    case 'imprimir':
        imprimirTabla(argv.base, argv.limite).catch(e => {
            console.log(e);
        });
        break
}
*/
//let base = parametro.split('=')[1];
/*
multiplicar.crearArchivo(base).then(mensaje => {
    console.log(mensaje);
});
*/

/*crearArchivo(base).then(mensaje => {
    console.log(mensaje);
}).catch(e => {
    console.log(e);
});
*/
/////////////////////////
const { crearArchivo, imprimirTabla } = require('./multiplicar/multiplicar')
const yargv = require('./config/yargs').argv;


let comando = yargv._[0];

switch (comando) {
    case 'crear':
        crearArchivo(yargv.base, yargv.limite)
            .then(mensaje => {
                console.log(mensaje);
            }).catch(e => {
                console.log(e);
            });
        break;
    case 'imprimir':
        imprimirTabla(yargv.base, yargv.limite).catch(e => {
            console.log(e);
        });
        break;

}