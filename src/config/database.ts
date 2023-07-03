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
