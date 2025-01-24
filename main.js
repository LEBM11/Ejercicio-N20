import Express, { Router } from 'express';
import cors from 'cors'
import RouteCliente from './Router/Cliente.js';
import RouteInventario from './Router/Inventario.js';

class Server{
    constructor(){
        this.app = Express();
        this.puerto = 7000;
        this.middleware();
        this.rutas();
    }

    iniciarServidor(){
        this.app.listen(this.puerto, () => {
            console.log(`Servidor iniciado en el puerto http://localhost:${this.puerto}`);
        });
    }

    middleware(){
        this.app.use(cors());
        this.app.use(Express.json());
    }

    rutas(){
        this.app.use("/api/clientes", new RouteCliente().config());
        this.app.use("/api/inventario", new RouteInventario().config());
    }
}

const server = new Server();
server.iniciarServidor();

