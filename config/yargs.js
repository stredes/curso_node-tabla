const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: ' es la base de la tabla de multiplicar'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: ' es la opcion de listar la tabla de multiplicar'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: ' es la opcion de hasta donde es el indice de la tabla'
                })
                .check((argv, options) => {
                    if( isNaN( argv.b ) ){
                        throw 'la base tiene que ser un numero'
                    }
                    return true;
                })  
                .argv;

module.exports = argv;
