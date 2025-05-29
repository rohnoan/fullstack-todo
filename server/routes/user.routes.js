import {Router} from 'express'

const userRouter=Router();

userRouter.get('/',(req,res)=>{
    res.send({title:'get all users'})
})
userRouter.get('/:id',(req,res)=>{
    res.send({title:'get one user'})
})
userRouter.post('/',(req,res)=>{
    res.send({title:'create one user'})
})
userRouter.put('/:id',(req,res)=>{
    res.send({title:'update one user'})
})
userRouter.delete('/:id',(req,res)=>{
    res.send({title:'delete one user'})
})

export default userRouter;