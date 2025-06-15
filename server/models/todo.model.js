import mongoose from "mongoose";

const todoSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    title:{
        type:String,
        required:[true,'title required'],
        trim:true,
        mingLength:1,
        maxLength:100
    },
    description:{
        type:String,
        trim:true,
        maxLength:1000,
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    dueDate:{
        type:Date
    }
},{timestamps:true});

const Todo=mongoose.model('Todo',todoSchema);
export default Todo;