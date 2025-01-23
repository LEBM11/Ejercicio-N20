import Mongo from "./MongoDB.js";

class Modelo{
    constructor(){
        this.DB =new Mongo()
    }
    
    buscarClientes = async() => {
        console.log(Mongo.estado)
        try{
            return await Mongo.db.collection('Cliente').toArray();
        }catch(err){
            console.error('Error al buscar cliente', err.message);
        }
}

    BuscarCliente = async(cliente) => {
        try {
            if (!Mongo.estado) throw new Error('DAO sin conexión a MongoDB');
            
            if (!cliente) {
                return await this.buscarClientes();
            }
            
        const Clientes = await Mongo.db.collection('Cliente')
        .find({ $and:[{edad:{$eq: cliente.Edad}}, {Nombre: cliente.Nombre}] }).toArray(((err, result) => {
                if (err) throw err;
                console.log(result);
                return Clientes;
        }));
        } catch (err) {
            console.error('Error al buscar cliente:', err.message);
            throw err;
        }
    }

    crearCliente = async(cliente) => {
        if (!Mongo.estado) throw new Error('DAO sin conexión a MongoDB');
        const resultado = await this.db.db.collection('Cliente').insertOne(cliente);
        return resultado;
    }

    actualizarCliente = async(cliente) => {
        if (!Mongo.estado) throw new Error('DAO sin conexión a MongoDB');
        const resultado = await this.db.db.collection('Cliente').updateOne({ Nombre: cliente }, { $set: cliente });
        return resultado;    }

    eliminarCliente = async(cliente) => {
        if (!Mongo.estado) throw new Error('DAO sin conexión a MongoDB');
        const resultado = await this.db.db.collection('Cliente').deleteOne({ Nombre: cliente});    }
}

export default Modelo;