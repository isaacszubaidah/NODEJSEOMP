import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import mysql from 'mysql2';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import { addOne, prodAdd } from './controller/controller.js';
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
    origin: ['http://localhost:8080','https://nodejseomp-5aae1.firebaseapp.com/', 'https://nodejseomp-1.onrender.com'],
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json())

app.use(express.static('public'))

app.use(cookieParser())

app.post('/users',addOne)

app.post('/products',prodAdd)
 
app.listen(PORT,()=>{
    console.log(`It is running on http://localhost:${PORT}`);
}); 
