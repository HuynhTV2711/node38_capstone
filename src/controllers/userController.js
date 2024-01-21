import bcrypt from "bcrypt";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


const userController = async (req, res)=>{
    try {
        let {userId} = req.params;
        let userIdNumber = userId *1;
        let {
            email,
            mat_khau,
            ho_ten,
            tuoi, 
            anh_dai_dien
        } = req.body;
        let encodePassword = bcrypt.hashSync(mat_khau, 2);
        let newData = {
            email,
            mat_khau: encodePassword,
            ho_ten,
            tuoi, 
            anh_dai_dien
        }

         await prisma.nguoi_dung.update({
            where:{
                nguoi_dung_id: userIdNumber
            },
            data: newData
        })
       res.send("update thành công")
    } catch (error) {
        res.send("Update lỗi vui lòng kiểm tra dữ liệu")
    }
}


export{
    userController
}