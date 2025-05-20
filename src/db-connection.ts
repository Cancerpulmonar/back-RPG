import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  password: '1234',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'RPG'
});

/*
const pool = new Pool({
  user: 'smash_m0lt_user',
  password: 'SRl8NtfOd0cfdaWP19hpgiBQDIWyDUx3',
  host: 'dpg-d08eu0c9c44c73btckj0-a.frankfurt-postgres.render.com',
  port: 5432,
  database: 'smash_m0lt',
  ssl: {
    rejectUnauthorized: false
  }
});*/







export function query(text: any): any {
  return pool.query(text);
}
