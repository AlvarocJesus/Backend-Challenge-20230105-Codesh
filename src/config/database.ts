import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

// ==> Conexão com a Base de Dados:
export const pool = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: 5432 || process.env.DB_PORT,
});
let databaseStatus: string;

/* async function connect() {
  await pool.connect();
} */

/* pool.on('connect', () => {
  try {
    console.log('Base de Dados conectado com sucesso!');
    databaseStatus = 'database connected';
  } catch (err) {
    databaseStatus = 'database connected';
  }
}); */

/* export default async function query(text?: any, params?: any){
  await connect()
  pool.query(text, params);
} */

