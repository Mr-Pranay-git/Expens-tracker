import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.listen(8080, ()=> console.log('Server is running on port 8080'));


// database connection
import mongoose from 'mongoose';
mongoose.connect(process.env.DB_URL)
.then(()=> console.log('Database connected !'))
.catch(()=> console.log('Database Not connected !'))

// app level middleware
import morgan from 'morgan';
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//route level middleware
import userRouter from './user/user.routes.js';
app.use("/api/user", userRouter)