

const middleWare = (req, res, next)=>{
    const login = false;
    if(login){
        next();
    }else{
        res.json({
            "message":"unauthorized"
        })
    }
}

module.exports = middleWare;