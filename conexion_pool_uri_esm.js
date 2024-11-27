// Para correr este programa: ' npm run uri'

// Importando Pool desde pg
import pg from 'pg';
const {Pool} = pg;

//importando env
import { config } from 'dotenv';
config();

//Declarando las variables de entorno
const {USER,HOST,DATABASE,PASSWORD,PORT} = process.env;

//Declarando la uri consumiendo las variables de entorno

const connectionString = `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`

// Instanciando Pool

const pool = new Pool ({connectionString});

const listar = async()=>{
    try {
        const query = 'SELECT * FROM estudiantes ORDER BY id;'
        const res=await pool.query(query)
        console.log('==== Lista de estudiantes ====');
        for (const estudiante of res.rows) {
          console.log( `${estudiante.id}.- ${estudiante.nombre} ${estudiante.apellido}`);  
        };
    } catch (error) {
        console.error(`Ups hubo un error: ${error.code} ${error.message}`)
    }finally{
        pool.end(()=>console.log('===Conexión Cerrada==='));
    }
};

// invocando la función

listar();