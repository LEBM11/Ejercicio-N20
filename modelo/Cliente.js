import Mongo from "./MongoDB.js";

class Modelo {
    constructor() {
        this.DB = new Mongo();
    }

    async buscarClientes() {
        if (!Mongo.db) throw new Error('DAO sin conexión a MongoDB');
        
        try {
            const clientes = await Mongo.db.collection('clientes').find().toArray();
            console.log('Clientes encontrados:', clientes); 
            return clientes;
        } catch (err) {
            console.error('Error al buscar clientes:', err.message);
            throw err;
        }
    }

    async crearCliente(cliente) {
        if (!Mongo.db) throw new Error('DAO sin conexión a MongoDB');

        try {
            console.log('Creando cliente:', cliente);
            const resultado = await Mongo.db.collection('clientes').insertOne(cliente);
            console.log('Cliente creado:', resultado);
            return resultado;
        } catch (err) {
            console.error('Error al crear cliente:', err.message);
            throw err;
        }
    }
}

export default Modelo;