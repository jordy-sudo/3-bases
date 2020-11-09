let opciones = {
    base: {
        demand: true,
        alias: 'b',
        desc: 'La base de la tabla de multiplicar'
    },
    limite: {
        alias: 'l',
        default: 10,
        desc: 'Limite de la tabla de multiplicar'
    }
};

const argv = require('yargs')
    .command('imprimir', 'Imprime en la consola de la tabla de multiplicar', opciones)
    .command('crear', 'Crear un archivo de la tabla de multiplicar', opciones)
    .argv;

module.exports = {
    argv
}