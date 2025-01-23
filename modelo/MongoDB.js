import {MongoClient} from 'mongodb';
import config from '../config.js';


class MongoDB {
    static db = null;
    static estado = false;

    constructor() {
        this.conectar();
    }
    
    async conectar() {
        try {
            const url = config.Mongo_URL;
            const dbName = config.Mongo_DB;
            this.client = new MongoClient(url);
            await this.client.connect();
            console.log("Conectado a la base de datos!");
            MongoDB.estado = true;
            MongoDB.db = this.client.db(dbName);
        } catch (err) {
            console.error("Error al conectar a la base de datos:", err);
        }
    }

}
export default MongoDB;