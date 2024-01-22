import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getImgHome = async (req, res)=>{
    try {
      let data = await prisma.hinh_anh.findMany();
      res.send(data);
    } catch (error) {
      res.send(error)
    }
  }

  const getImgHomeByName = async (req, res)=>{
    try {
     const {tenHinh} = req.query; // lấy các query trong {}
    //const tenHinh = req.query.tenHinh;   //cach 2
      let data = await prisma.hinh_anh.findMany({
        where: {
            ten_hinh: {
                contains:tenHinh
            }
        }
      });
      res.send(data);
    } catch (error) {
      res.send(error)
    }
  }

  export{
    getImgHome,
    getImgHomeByName
  }