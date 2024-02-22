import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import mysql from 'mysql2';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import { addOne, editOne, prodAdd } from './controller/controller.js';
config() 

const pool = mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
}).promise()

const PORT = process.env.PORT;

const app = express()

app.use(cors({
    origin:'byezi4481zkbqe5dwtxz-mysql.services.clever-cloud.com',
    credentials:true
}
))

app.use(express.json())

app.use(express.static('public'))

app.use(cookieParser())

app.post('/users',addOne)

app.post('/products',prodAdd)

app.patch('/products/:id',editOne)
 
app.listen(PORT,()=>{
    console.log(`It is running on http://localhost:${PORT}`);
}); 