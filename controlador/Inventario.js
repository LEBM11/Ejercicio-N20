import Servicios from '../Servicio/Inventario.js';

class Controlador {
    constructor() {
        this.servicios = new Servicios();
    }

    buscarProductos = async (req, res) => {
        try {
            const productos = await this.servicios.buscarProductos();
            console.log('Productos enviados:', productos); 
            res.status(200).json(productos);
        } catch (err) {
            console.error('Error al buscar productos:', err.message);
            res.status(500).json({ error: err.message });
        }
    }

    crearProducto = async(req, res) => {
        try {
            const { Nombre, Precio, Stock} = req.body;
            const productoNuevo = { Nombre, Precio, Stock };
            const producto = await this.servicios.crearProducto(productoNuevo);
            console.log('producto creado:', producto);
            res.status(200).json(producto);
        } catch (err) {
            console.error('Error al crear producto:', err.message);
            res.status(500).json({ error: err.message });
        }
    }
}

export default Controlador;