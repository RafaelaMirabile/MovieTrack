import pkg from 'pg';
import 'dotenv/config';
var Pool = pkg.Pool;
var connection = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: 5432,
    database: process.env.DB_NAME,
    password: process.env.DB_PSW
});
export default connection;
