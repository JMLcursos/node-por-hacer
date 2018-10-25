const fs = require('fs');

let listadoPorHacer = [];
const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se ha podido guardar');
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    console.log(listadoPorHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })
    if (index > -1) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDB();
    if (listadoPorHacer.length > 0) {
        let nuevoListado = listadoPorHacer.filter(tarea => {
            return tarea.descripcion != descripcion;
        })
        if (nuevoListado.length != listadoPorHacer.length) {
            listadoPorHacer = nuevoListado;
            guardarDB();
            return true;
        } else {
            return false;
        }
    } else {
        return false
    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}