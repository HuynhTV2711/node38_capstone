import { createToken } from "../config/jwt.js";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import bcrypt from "bcrypt";
const login = async (req, res) => {
  try {
    let { email, mat_khau } = req.body;
    let data = await prisma.nguoi_dung.findFirst({
      where: {
        email: email,
      },
    });
    if (data) {
      let checkPass = bcrypt.compareSync( mat_khau, data.mat_khau);
      if (checkPass) {
        let payload = {
          nguoi_dung_id: data.nguoi_dung_id,
          email,
        };
        let token = createToken(payload);
        res.status(200).send(token);
      } else {
        res.status(403).send("Mật khẩu không chính xác");
      }
    } else {
      res.status(403).send("Kiểm tra lại email và password");
    }
  } catch (error) {
    res.send(error);
  }
};

const signUp = async (req, res) => {
  try {
    let { email, mat_khau, ho_ten, tuoi, anh_dai_dien } = req.body;
    let data = await prisma.nguoi_dung.findFirst({
      where: {
        email: email,
      },
    });

    if (!data) {
      let encodePassword = bcrypt.hashSync(mat_khau, 2);
      let newUser = {
        email,
        mat_khau: encodePassword,
        ho_ten,
        tuoi,
        anh_dai_dien

     };
      await prisma.nguoi_dung.create({
        data: newUser
      });
      res.status(201).send("Tạo user thành công");
    } else {
      res.status(500).send("Đã có trong DB");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};


export { login, signUp};
