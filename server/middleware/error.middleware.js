//we try to intercept the error and try to find more info about it

const errorMiddleware=(err,req,res,next)=>{
    try{

        let error={...err};

        error.message=err.message;
        
        console.log(err);

        //mongoose bad object
        if(err.name==='CastError'){
            const message='resource not found'
            error=new Error(message)
            error.statusCode=404;
        }

        //mongoose duplicate key
        if(err.code===11000){
            const message='duplicate field value entered'
            error=new Error(message);
            error.statusCode=400
        }

        //mongoose validation error
        if(err.name==='ValidationError'){
            const message=Object.values(err.errors).map(val=>val.message);
            error=new Error(message.join(', '));
            error.statusCode=400;
        }
        res.status(error.statusCode || 500).json({success:false,error:error.message || 'server error'})

        
    }catch(error){
        next(error);

    }
}

export default errorMiddleware;