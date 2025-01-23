import Servicios from '../servicios/Cliente.js';

class Controlador{
    constructor(){
        this.servicios = new Servicios();
    }

    BuscarCliente = async(req, res) =>{
        try{
            const{Nombre, Apellido, Dni, Edad} = req.body;
            const NombreCliente = {Nombre, Apellido, Dni, Edad};
            const clientes = await this.servicios.BuscarCliente(NombreCliente);
            res.status(200).json(clientes);
        }catch(err){
            res.status(500).json({error: err});
        }
    }

    crearCliente = async(req, res) => {
        try{
            const { Nombre, Apellido, Dni, Edad } = req.body;
            const clienteNuevo = { Nombre, Apellido, Dni, Edad };
            const cliente = await this.servicios.crearCliente(clienteNuevo);
            res.status(200).json(cliente);
        }catch(err){
            res.status(500).json({error: err});
        }
    }

    actualizarCliente = async(req, res) => {
        try{
            const{Nombre} = req.body;
            const NombreCliente = {Nombre};
            const cliente = await this.servicios.actualizarCliente(NombreCliente);
            res.status(200).json(cliente);
        }catch(err){
            res.status(500).json({error: err});
        }
    }

    eliminarCliente = async(req, res) => {
        try{            
            const{Nombre} = req.body;
            const NombreCliente = {Nombre};
            const cliente = await this.servicios.eliminarCliente(NombreCliente);
            res.status(200).json(cliente);
        }catch(err){
            res.status(500).json({error: err});
        }
    }
}

export default Controlador;