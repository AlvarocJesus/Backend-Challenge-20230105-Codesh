import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

// ==> Conexão com a Base de Dados:
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: 5432 || process.env.DB_PORT,
});

pool.on('connect', () => {
  console.log('Base de Dados conectado com sucesso!');
});

export default async function query(text?: any, params?: any): Promise<void> {
  pool.query(text, params);
}
