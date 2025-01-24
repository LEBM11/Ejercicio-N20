import Servicios from '../Servicio/Cliente.js';

class Controlador {
    constructor() {
        this.servicios = new Servicios();
        this.buscarClientes = this.buscarClientes.bind(this);
        this.crearCliente = this.crearCliente.bind(this);
    }

    async buscarClientes (req, res) {
        try {
            const clientes = await this.servicios.buscarClientes();
            console.log('Clientes enviados:', clientes); 
            res.status(200).json(clientes);
        } catch (err) {
            console.error('Error al buscar clientes:', err.message);
            res.status(500).json({ error: err.message });
        }
    }

    async crearCliente(req, res) {
        try {
            console.log("controlador.cliente")
            const { Nombre, Apellido, Dni, Edad } = req.body;
            const clienteNuevo = { Nombre, Apellido, Dni, Edad };
            const cliente = await this.servicios.crearCliente(clienteNuevo);
            console.log('Cliente creado:', cliente);
            res.status(200).json(cliente);
        } catch (err) {
            console.error('Error al crear cliente:', err.message);
            res.status(500).json({ error: err.message });
        }
    }
}

export default Controlador;