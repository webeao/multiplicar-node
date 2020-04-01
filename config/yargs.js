const opciones = {
    base:{
        demand: true,
        alias: 'b'
    },
    limite:{
        alias: 'l',
        default: 10
    }
    
}


const argv = require('yargs')
.command('listar', 'Imprime en consla la tabla de multiplicar',opciones)
.command('crear', 'Crea un archivo de texto en el directorio tablas', opciones )
.help()
.argv;

module.exports = {
argv
}