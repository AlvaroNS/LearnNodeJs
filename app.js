

const { options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

const cte = argv.base;
console.clear();

console.log(process.argv)
console.log(argv)

console.log('base yargs:',argv.base)

crearArchivo( cte )
    .then((nombreArchivo) => {console.log(nombreArchivo.rainbow, 'creado')})
    .catch((err) => {console.log(err)});



