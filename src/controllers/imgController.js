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
const getImgByIdUser = async (req, res)=>{
  let {idNguoiDung} =req.params;
  let idUser = idNguoiDung *1;
  try {
    let data = await prisma.hinh_anh.findMany({
      where:{
        nguoi_dung_id: idUser,
      },
      select:{
        ten_hinh: true,
        duong_dan: true,
        mo_ta: true,
        nguoi_dung:{
          select:{
            ho_ten: true
          }
        }
      }
    })
    res.send(data)
  } catch (error) {
    res.send("Looix")
  }
}

const checkSave = async (req, res)=>{
  try {
    let {idImg} = req.params;
    let idImgNumber = idImg*1;
    let data = await prisma.luu_anh.findFirst({
      where:{
        hinh_id: idImgNumber
      }
    })
    if (data) {
      res.send("Hình ảnh đã được lưu")
    }
  } catch (error) {
    res.send("Looix")
  }
}
  export{
    getImg,
    getImgByIdUser,
    checkSave
  }