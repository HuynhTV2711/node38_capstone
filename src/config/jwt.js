import jwt from "jsonwebtoken";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

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

const khoaApi = async(req, res, next)=>{
    let {token} = req.headers;
    if (token) {
        let verifyToken = checkToken(token);
        console.log(verifyToken);
        if (verifyToken.statusCode == 401) {
            res.status(401).send(verifyToken.message)
        }else if(verifyToken.statusCode == 200){
            const {nguoi_dung_id} = verifyToken.message.data;
            let data = await prisma.nguoi_dung.findFirst({
                where:{
                    nguoi_dung_id
                }
            })
            if (data) {
                next()
            }else{
                res.status(401).send("invalid token")
            }
        }
        
    }else{
        res.status(401).send("Vui lòng đăng nhập")
    }
}

export{createToken, checkToken, khoaApi}