import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// getVideo dùng prisma lấy theo id video
const getImg = async (req, res)=>{
    try {
      let data = await prisma.hinh_anh.findMany();
      res.send(data);
    } catch (error) {
      res.send("Looix")
    }
  }

  export{
    getImg
  }