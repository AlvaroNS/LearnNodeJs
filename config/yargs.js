const argv = require('yargs')
            .option('b',{
                alias:'base',
                type:'number',
                demandOption: true,
                describe: "Es la base de la tabla de multiplicar"
            })
            .check((argv,options) => {
                if( isNaN( argv.b )){
                    throw 'la base tiene que ser un numero'
                }
                return true
            })
            .argv;


module.exports= argv;