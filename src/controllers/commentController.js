import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


const getCommentByIdImg = async (req, res)=>{
    try {
        let {idImg} = req.params;
        let idImgNumber = idImg *1
        let data = await prisma.binh_luan.findMany({
            where:{
                hinh_id: idImgNumber
            }
        })
        res.send(data)
    } catch (error) {
        res.send("Looix")
    }
}

const createComment = async (req, res)=>{
    let {idImg} = req.params;
    let idImgNumber = idImg*1
    try {
        let {
            nguoi_dung_id,
            ngay_binh_luan,
            noi_dung
        } = req.body
        let newData = {
            nguoi_dung_id,
            hinh_id: idImgNumber,
            ngay_binh_luan,
            noi_dung
        }
        console.log(newData);
        await prisma.binh_luan.create({
            data: newData
        })
        res.send("Bình luận thành công")
    } catch (error) {
        res.send("Lỗi")
    }
}




export{
    getCommentByIdImg,
    createComment
}