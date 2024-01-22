import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getUser = async (req, res) => {
    try {
        let data = await prisma.nguoi_dung.findMany();
        res.send(data);
    } catch (error) {
        res.send(error)
    }
}

const getlistbyUseridSave = async (req, res) => {
    try {
        const { UserId } = req.params;
        const userIdNum = UserId * 1 // string -> number
        let data = await prisma.luu_anh.findMany({
            where: {
                nguoi_dung_id: userIdNum
            }
        });
        res.send(data);
    } catch (error) {
        res.send(error)
    }
}

const getlistbyUseridCreate = async (req, res) => {
    try {
        const { UserId } = req.params;
        const userIdNum = UserId * 1 // string -> number
        let data = await prisma.hinh_anh.findMany({
            where: {
                nguoi_dung_id: userIdNum
            }
        });
        res.send(data);
    } catch (error) {
        res.send(error)
    }
}

const deleteimgbyId = async (req, res) => {
    try {
         let { ImgId } = req.params;
         console.log(ImgId)
         await prisma.hinh_anh.delete({
            where: {
                hinh_id:  +ImgId// number
            }
        });
        res.send(`Delete ImgId:${ImgId} successfull!`);
    } catch (error) {
        res.send(error)
    }
}


export {
    getUser,
    getlistbyUseridSave,
    getlistbyUseridCreate,
    deleteimgbyId,

}