import mongoose from 'mongoose'

import {DB_URI,NODE_ENV} from '../config/env.js'

if(!DB_URI){
    throw new error('please add DB URI in .env')
}

const connectToDatbase=async()=>{
    try{
        await mongoose.connect(DB_URI);
        console.log('connected to database')
    }catch(error){
        console.error('error connecting to database : ', error);
        process.exit(1);
    }
}

export default connectToDatbase;