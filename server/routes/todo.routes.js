import {Router} from 'express'

const todoRouter=Router();

todoRouter.get('/',(req,res)=>{
    res.send({title:'get all todos'})
})
todoRouter.get('/:id',(req,res)=>{
    res.send({title:'get one todo'})
})
todoRouter.post('/',(req,res)=>{
    res.send({title:'create one todo'})
})
todoRouter.put('/:id',(req,res)=>{
    res.send({title:'update one todo'})
})
todoRouter.delete('/:id',(req,res)=>{
    res.send({title:'delete one todo'})
})

export default todoRouter;