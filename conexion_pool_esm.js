// Para correr este programa: ' npm run client'

import pg from 'pg';
const { Pool } = pg;

import dotenv from 'dotenv';
dotenv.config();

const {USER,HOST,DATABASE,PASSWORD,PORT} = process.env;

const pool = new Pool ({
    user:USER,
    host:HOST,
    database:DATABASE,
    password:PASSWORD,
    port:PORT
});

const listarEstudiantes = async ()=>{
    try {
        const query = 'SELECT * FROM estudiantes ORDER BY id';
        const res = await pool.query(query)
        console.log('==== Lista de Estudiante ====');
        for (const estudiante of res.rows) {
            console.log(`${estudiante.id}.-`,estudiante.nombre,estudiante.apellido);   
        };
    } catch (error) {
        console.log(error);
    }finally{
        pool.end(()=>console.log('=== Conexión cerrada ==='));
    }
};

listarEstudiantes();