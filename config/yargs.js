//
// Comandos de yargs //

/*
Parámetros de consola con YARGS
*/

const obj_descripcion = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    }
}

const obj_actualizar = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completao o pendiente la tarea'
    }
}

const argv = require('yargs')
    // parámetros descripción     
    .command('crear', 'Crea un elemento por hacer', obj_descripcion)
    .command('actualizar', 'Actualiza el estado de una tarea', obj_actualizar)
    .command('borrar', 'Borra la tarea', obj_descripcion)
    .help()
    .argv;

module.exports = {
    argv
}