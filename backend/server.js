import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import mysql from 'mysql2';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
import { addOne, eUser, editOne, getAll, getOne, prodAdd } from './controller/controller.js';
import UserRouter from './routes/user.js';

config();

const app = express();
const PORT = process.env.PORT 

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());


const corsOptions = {
  origin: ['http://localhost:8080', 'https://nodejseomp-1.onrender.com'],
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));


app.use(UserRouter);

app.post('/login', (req, res) => {
  res.send({
    msg: "YAY! You have logged in."
  });
});

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
}).promise();


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
