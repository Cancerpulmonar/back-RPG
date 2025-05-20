import express from "express";
import cors from 'cors';
const app = express();
app.use(cors());

import bodyParser from 'body-parser';
const jsonParser = bodyParser.json();

import * as db from './db-connection';

app.get('/player/:id', async (req, res) => {
    const id = req.params.id;
    console.log("Peticion recibida")
    console.log(id)

    try {
        const query = `SELECT * FROM player WHERE id = '${id}'`;
        const db_response = await db.query(query);

        if (db_response.rowCount == 1) {
            console.log(`Personaje encontrado con el id: '${id}'.`);
            res.json(db_response.rows[0]);  // Devuelve el personaje actualizado
        } else {
            console.log(`No se encontró el personaje con ID ${id}.`);
            res.status(404).json({ error: true, message: 'Player not found' });

        }
    } catch (err) {
        console.error('Error en la consulta:', err);
        res.status(500).send('Error interno del servidor');
    }
});

app.get('/personajes', async (req, res) => {
    try {
        let query = `SELECT * FROM personajes`;
        let db_response = await db.query(query);

        if (db_response.rows.length > 0) {
            console.log(`Se encontraron ${db_response.rows.length} persoanjes.`);
            res.json(db_response.rows);  // Enviar toda la lista de alumnos
        } else {
            console.log(`No se encontraron personajes.`);
            res.status(404).json({ message: 'No students found' });
        }
    } catch (err) {
        console.error('Error en la consulta:', err);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/passes/:id', async (req, res) => {
    const id = req.params.id;
    console.log(id)

    try {
        const query = `UPDATE personajes SET pases = pases + 1 WHERE id = ${id} `;
        const db_response = await db.query(query);

        if (db_response.rowCount == 1) {
            console.log(`Pass actualizado para personaje con ID ${id}.`);
            res.json(db_response.rows[0]);  // Devuelve el personaje actualizado
        } else {
            console.log(`No se encontró el personaje con ID ${id}.`);
            res.status(404).json({ message: 'Personaje no encontrado' });
        }
    } catch (err) {
        console.error('Error en la consulta:', err);
        res.status(500).send('Error interno del servidor');
    }
});

  

const port = process.env.PORT || 3000;

app.listen(port, () => 
    console.log(`App listening on PORT ${port}.

    ENDPOINTS:
     -GET personajes
     -GET smashes
     -GET 
     `));