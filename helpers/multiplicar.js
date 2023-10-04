const fs = require('fs');

const crearArchivo = async(base = 5) => {
    try{
        console.clear();
        console.log('=============='.blue)
        console.log(` tabla del: ${base}`)
        console.log('=============='.cyan)

        let salida = '';

        for (let i = 0; i <= 10; i++) {
            salida +=`${base} x ${i} = ${base*i}\n`;
        }

        console.log(salida);

        fs.writeFileSync( `./output/tabla-${base}.txt`, salida);
        
        return`tabla-${ base }.txt`;
    } catch(err){
        throw err;
    }
    
} 

module.exports={
    crearArchivo
}