// requireds
const argv = require('./config/yargs').argv;
const multiplicar = require('./multiplicar/multiplicar');
const colors = require('colors');

let comando = argv._[0];

switch(comando){

case 'listar':
    console.log('listar');
    multiplicar.listarArchivo(argv.base,argv.limite)
    .then(data => console.log(data))
    .catch(e => console.log(e));
    break;
case 'crear':
    console.log('crear');
    multiplicar.crearArchivo(argv.base,argv.limite)
.then(nombreArchivo => console.log('Archivo creado:', colors.green(`${nombreArchivo}`) ))
.catch(e => console.log(e));
    break;

    default:
        console.log('comando no reconocido');

}

//console.log(argv);

//recicir parametros por consola
// el process.argv maneja los parametros que se envian por consola y los 
// maneja en un arreglo, este en la posicion 0 y 1 tiene informacion de 
// la ubicacion del proyecto y de node y en la  3 contiene informació delparametro que se pasa.
//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];


//console.log(argv);


//multiplicar.crearArchivo(base)
//.then(nombreArchivo => console.log(`Archivo creado: ${nombreArchivo}`))
//.catch(e => console.log(e));
