import Controlador from "../Controlador/Cliente.js";
import Express from 'express';

class Route {
    constructor() {
        this.Controlador = new Controlador();
    }

    config() {
        const router = Express.Router();
        router.get("/", this.Controlador.buscarClientes);
        router.post("/", this.Controlador.crearCliente);
        return router;
    }
}

export default Route;