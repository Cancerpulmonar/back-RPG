import { Pool } from 'pg';
/*
const pool = new Pool({
  user: 'postgres',
  password: '1234',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'RPG'
});*/


const pool = new Pool({
  user: 'bdd_rpg_user',
  password: 'hXYKxLPjDD6Dr8j3YHGIKXtSgzE5pNws',
  host: 'dpg-d0m8lc0dl3ps73c4vvs0-a',
  port: 5432,
  database: 'bdd_rpg',
  ssl: {
    rejectUnauthorized: false
  }
});







export function query(text: any): any {
  return pool.query(text);
}
