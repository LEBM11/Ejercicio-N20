import Controlador from "../controlador/clientes.js";
import Express from 'express';

class Route{
    constructor(){
        this.controlador = new Controlador()
    }
    
    config(){
        const router = Express.Router();
        router.get("/", this.controlador.BuscarCliente);
        router.post("/", this.controlador.crearCliente);
        router.put("/", this.controlador.actualizarCliente);
        router.delete("/", this.controlador.eliminarCliente);
        return router;
    };
}

export default Route;