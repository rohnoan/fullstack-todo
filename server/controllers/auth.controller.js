import mongoose from "mongoose";
import User from '../models/user.model.js'
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import { JWT_EXPIRES_IN, JWT_SECRET } from "../config/env.js";

export const signUp=async(req,res,next)=>{
    const session = await mongoose.startSession(); //mongoose transaction session
    session.startTransaction();

    try{
        const {name,email,password}=req.body;
        console.log(name,email,password);
        const existingUser=await User.findOne({email});
        if(existingUser){
            const error=new Error('user already exists');
            error.statusCode=409;
            throw error;
        }

        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);
        const newUsers=await User.create([{name,email,password:hashedPassword}],{session});
        const token=jwt.sign({userId:newUsers[0]._id},JWT_SECRET,{expiresIn:JWT_EXPIRES_IN});
        
        session.commitTransaction();
        session.endSession();

        res.status(201).json({
            success:true,
            message:'user created successfully',
            data:{
                token,
                user:newUsers[0]
            }
        })

    }catch(error){
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
}

export const signIn=async(req,res,next)=>{
    try{
        const {email,password}=req.body;
        console.log(email,password);

        const existingUser=await User.findOne({email})
        if(!existingUser){
            const error=Error('user doesnt exist please sign up')
            error.statusCode=409;
            throw error;
        }

        const isPasswordValid=await bcrypt.compare(password,existingUser.password);

        if(!isPasswordValid){
            const error=new Error('invalid password');
            error.statusCode=401;
            throw error;
        }

        const token=jwt.sign({userId:existingUser._id},JWT_SECRET,{expiresIn:JWT_EXPIRES_IN});
        res.status(200).json({
            success:true,
            message:'user signed in successfully',
            data:{
                token,
                user:existingUser
            }
        });

    }catch(error){
        next(error);
    }
}

export const signOut=async(req,res,next)=>{
    
}