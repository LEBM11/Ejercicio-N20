
import Modelo from '../Modelo/Inventario.js';

class Servicios {
    constructor() {
        this.db = new Modelo();
    }

    async buscarProductos() {
        return await this.db.buscarProductos();
    }

    async crearProducto(datos) {
        return await this.db.crearProducto(datos);
    }
}

export default Servicios;