import Mongo from "./MongoDB.js";

class Modelo {
    constructor() {
        this.DB = new Mongo();
    }

    async buscarProductos() {
        if (!Mongo.db) throw new Error('DAO sin conexión a MongoDB');
        
        try {
            const productos = await Mongo.db.collection('Inventario').find().toArray();
            console.log('Productos encontrados:', productos); 
            return productos;
        } catch (err) {
            console.error('Error al buscar Produtos:', err.message);
            throw err;
        }
    }

    async crearProducto(producto) {
        if (!Mongo.db) throw new Error('DAO sin conexión a MongoDB');

        try {
            console.log('Creando producto:', producto);
            const resultado = await Mongo.db.collection('Inventario').insertOne(producto);
            console.log('producto creado:', resultado);
            return resultado;
        } catch (err) {
            console.error('Error al crear producto:', err.message);
            throw err;
        }
    }
}

export default Modelo;