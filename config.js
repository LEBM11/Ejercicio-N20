import dotenv from 'dotenv';
dotenv.config();

const Mongo_User = process.env.DB_USER;
const Mongo_Password = process.env.DB_PASSWORD;
const Mongo_DB = process.env.DB_NAME;
const Mongo_URL = process.env.DB_URL;

export default {
    Mongo_User,
    Mongo_Password,
    Mongo_DB,
    Mongo_URL
};