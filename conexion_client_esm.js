// Para correr este programa: ' npm run pool'

import pg from 'pg';

import { config } from 'dotenv';

const {Client} = pg;

config();

const {USER,HOST,DATABASE,PASSWORD,PORT} = process.env;

const cliente = new Client ({
    user: USER,
    host: HOST,
    database: DATABASE,
    password: PASSWORD,
    port: PORT
});

cliente.connect(()=>console.log("Conexion con Client abierta"));

cliente.query('SELECT * FROM estudiantes ORDER BY id',( err,res)=>{
   // console.log(err,res);
   //console.log(res.rows);
   console.log(res?res.rows:err);
    cliente.end(()=>console.log("Conexion con Client cerrada"));
})