import Controlador from "../Controlador/Inventario.js";
import Express from "express"

class Router{
    constructor(){
        this.controlador = new Controlador()
    }

    config(){
        const router = Express.Router();
        router.get("/", this.controlador.buscarProductos);
        router.post("/", this.controlador.crearProducto);
        // router.put("/Inventario", this.controlador.actualizarCliente);
        // router.delete("/Inventario", this.controlador.eliminarCliente);
        return router
    };
}

export default Router;