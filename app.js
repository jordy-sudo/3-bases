/*
//importar el módulo (paquete)
const fs = require('fs');

let base = 5;
let data = "";

for (let i = 1; i <= 10; i++) {
    data += `${base} x ${i} = ${base * i} \n`;
}

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