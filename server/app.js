import express from 'express'
import {PORT} from './config/env.js'
import userRouter from './routes/user.routes.js'
import todoRouter from './routes/todo.routes.js'
import authRouter from './routes/auth.routes.js'
import connectToDatabase from './database/mongodb.js'

const app=express();

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/todos',todoRouter);
app.use('/api/v1/users',userRouter);

app.get('/',(req,res)=>{
  res.send('welcome to the todolist')
})

app.listen(PORT,async()=>{
  console.log(`running on port ${PORT}`)
  await connectToDatabase();
})
