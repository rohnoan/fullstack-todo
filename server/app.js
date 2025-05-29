import express from 'express'
import {PORT} from './config/env.js'
const app=express();

app.get('/',(req,res)=>{
  res.send('welcome to the todolist')
})

app.listen(PORT,()=>{
  console.log(`running on port ${PORT}`)
})
