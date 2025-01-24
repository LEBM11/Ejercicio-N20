
import Modelo from '../modelo/Cliente.js';

class Servicios {
    constructor() {
        this.db = new Modelo();
    }

    async buscarClientes() {
        return await this.db.buscarClientes();
    }

    async crearCliente(datos) {
        console.log("servicio."+datos);
        return await this.db.crearCliente(datos);
    }
}

export default Servicios;