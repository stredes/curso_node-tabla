const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    try {



        let salida  = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${(base)} ${'x'} ${(i)} ${'='} ${(base * i)}\n`;
            consola += `${colors.red (base)} ${'x'.green} ${colors.yellow(i)} ${'='.green} ${colors.bold(base * i)}\n`;
        }

        if( listar){
            console.log('==============='.green);
            console.log(' tabla del: '.red,colors.blue(base));
            console.log('==============='.green);
            

            
            
            console.log(consola);
            console.log(salida);
        }
    

        fs.writeFileSync(`./Salida/tabla- ${base}.txt`, salida );

        return `tabla-${base}.txt`;

        } catch (err) {
            throw err;
        }

}
module.exports ={
    crearArchivo

}


