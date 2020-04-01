// requerir el modulo file system
const fs = require('fs');
// requerir libreria de colores
const colors = require('colors');

console.log('======='.green);

let listarArchivo = (base, limite)=>{

    return new Promise((resolve,reject)=>{
        
        if(!Number(base)){
            reject(`El valor introducido "${base}"  no es un numero`);
            return;
        }if(!Number(limite)){
            reject(`El valor introducido "${limite}"  no es un numero`);
            return;
        }

        let data = '';

    for(let i=1;i<=limite;i++){
    
      let resultado = parseInt(base)*parseInt(i) ;
   
    data += `${base} * ${i}  = ${resultado}\n`;
    }
 
    resolve(data);

    });

}


let crearArchivo = ((base,limite = 10) => {

return new Promise((resolve,reject) =>{

    if(!Number(base)){
        reject(`El valor introducido "${base}"  no es un numero`);
        return;
    }if(!Number(limite)){
        reject(`El valor introducido "${limite}"  no es un numero`);
        return;
    }

    let data = '';

    for(let i=1;i<=limite;i++){
    
      let resultado = parseInt(base)*parseInt(i) ;
     data += `${base} * ${i}  = ${resultado}\n`;
    }
    
    // crear archibos de texto
    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        if (err){
            reject(err);
        }else{
            resolve(`tabla-${base}.txt`)
        }
        
      });


});

});
 
module.exports = {
    crearArchivo,
    listarArchivo
}