import { Client } from 'pg';

export const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: 3333 || process.env.DB_PORT,
});

await client.connect()
