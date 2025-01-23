import {Controlador} from "../controlador/Inventario.js";
import server from "../main.js";

class Inventario{
    constructor(){
        this.controlador = new Controlador()
        this.route = server.app.route();
    }

    config(){
        route.get("/Inventario", this.controlador.BuscarCliente);
        router.post("/Inventario", this.controlador.crearCliente);
        router.put("/Inventario", this.controlador.actualizarCliente);
        router.delete("/Inventario", this.controlador.eliminarCliente);
    };
}

export default Inventario;