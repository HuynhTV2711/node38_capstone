import jwt from "jsonwebtoken";


const createToken =(data)=>{
    return jwt.sign({data}, "node38_capstone", {expiresIn:"1y"});
}


const checkToken = (token)=>{
    return jwt.verify(token, "node38_capstone", (err, decoded)=>{
        if (err) {
            return {
                statusCode: 401,
                message: "Invalid token"
            }
        } else {
            return{
                statusCode: 200,
                message: decoded
            }
        }
    })
}


export{createToken, checkToken}