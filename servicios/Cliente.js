import { json } from 'express';
import Modelo from '../modelo/Cliente.js';

class servicios{
    constructor(){ 
        this.db = new Modelo();
    }

    BuscarCliente = async(datos) => {
        return await this.db.BuscarCliente(datos);
    }

    crearCliente = async(datos) => {
        return await this.db.crearCliente(datos);
    }

    actualizarCliente = async(datos) => {
        return await this.db.actualizarCliente(datos);
    }

    eliminarCliente = async(datos) => {
        return await this.db.eliminarCliente(datos);
    }
}

export default servicios;