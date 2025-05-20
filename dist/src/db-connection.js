"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
var pg_1 = require("pg");
var pool = new pg_1.Pool({
    user: 'postgres',
    password: '1234',
    host: 'localhost',
    port: 5432,
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
function query(text) {
    return pool.query(text);
}
exports.query = query;
