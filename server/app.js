import express from 'express'
import cookieParser from 'cookie-parser'
import {PORT} from './config/env.js'
import userRouter from './routes/user.routes.js'
import todoRouter from './routes/todo.routes.js'
import authRouter from './routes/auth.routes.js'
import connectToDatabase from './database/mongodb.js'
import errorMIddlware from './middleware/error.middleware.js'

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser())

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/todos',todoRouter);
app.use('/api/v1/users',userRouter);

app.use(errorMIddlware)

app.get('/',(req,res)=>{
  res.send('welcome to the todolist')
})

app.listen(PORT,async()=>{
  console.log(`running on port ${PORT}`)
  await connectToDatabase();
})
