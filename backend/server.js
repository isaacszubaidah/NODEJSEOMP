import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import mysql from 'mysql2';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
import { addOne, eUser, editOne, getAll, getOne, prodAdd} from './controller/controller.js';
import UserRouter from './routes/user.js'

config() 

const pool = mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
}).promise()


const PORT = process.env.PORT;

const app = express()

app.use(cors({}))

const corsOptions = {
  origin: 'http://localhost:8080',
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.use(express.json())

app.use(express.static('public'))

app.use(cookieParser())

app.use(UserRouter) 

app.post('/login',(req,res)=>{
    res.send({
        msg: "YAY! You have logged in."
    })
})


app.listen(PORT,()=>{
    console.log(`It is running on http://localhost:${PORT}`);
}); 
