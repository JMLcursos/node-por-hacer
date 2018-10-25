const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('========= Listado por hacer ========='.green)
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado)
            console.log('======================================'.green)
        }
        break;
    case 'actualizar':
        if (porHacer.actualizar(argv.descripcion, argv.completado)) {
            console.log(`El valor de ${argv.descripcion.yellow} ha sido actualizado`)
        } else {
            console.log(`El valor de ${argv.descripcion.red} NO ha sido actualizado`)
        }
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('No se reconoce el comando');
}