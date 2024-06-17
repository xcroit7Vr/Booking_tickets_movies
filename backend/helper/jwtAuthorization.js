import jwt from "jsonwebtoken";

export function jwtUserAuthorization(req, res , next) {

    if(req.cookies.jwtToken){
        const jwtCookie = req.cookies.jwtToken;
        
        const verified = jwt.verify(jwtCookie, process.env.SECRET_KEY);
        if (verified && verified.role == "user") {
            
            return next();
        }
    }


    return res.status(401).json({message : 'unauthorized'});    
    
}

export function jwtAdminAuthorization(req, res , next) {

    if(req.cookies.jwtToken){
        const jwtCookie = req.cookies.jwtToken;
        
        const verified = jwt.verify(jwtCookie, process.env.SECRET_KEY);
        if (verified && verified.role == "admin") {
            
            return next();
        }
    }


    return res.status(401).json({message : 'unauthorized'});    
    
}

export function jwtAuthorization(req, res , next) {

    if(req.cookies.jwtToken){
        const jwtCookie = req.cookies.jwtToken;
        
        const verified = jwt.verify(jwtCookie, process.env.SECRET_KEY);
        if (verified) {
            
            return next();
        }
    }


    return res.status(401).json({message : 'unauthorized'});    
    
}