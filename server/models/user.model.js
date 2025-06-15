import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name: {
        type:String,
        required:[true,'username required'],
        trim:true,
        minLength:3,
        maxLength:50
    },
    email:{
        type:String,
        required:[true,'email required'],
        unique:true,
        lowercase:true,
        trim:true,
        minLength:3,
        maxLength:255,
        match:[/\S+@\S+\.\S+/,'please fill a valid email address'],
    },
    password:{
        type:String,
        required:[true,'password required'],
        minLength:6,
    },
},{timestamps:true});

const User=mongoose.model('User',userSchema)

export default User;

//{name}

