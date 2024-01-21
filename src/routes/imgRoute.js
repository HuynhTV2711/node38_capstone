import express from "express";
import { checkSave, getImg, getImgByIdUser } from "../controllers/imgController.js";
import { khoaApi } from "../config/jwt.js";


const imgRoute = express.Router();

imgRoute.get("/get-img", getImg);
imgRoute.get("/get-img/:idNguoiDung", khoaApi, getImgByIdUser)
imgRoute.get("/check-save/:idImg", checkSave)



export default  imgRoute;
    