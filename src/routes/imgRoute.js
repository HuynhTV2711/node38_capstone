import express from "express";
import { checkSave, getImg, getImgByIdUser } from "../controllers/imgController.js";


const imgRoute = express.Router();

imgRoute.get("/get-img", getImg);
imgRoute.get("/get-img/:idNguoiDung", getImgByIdUser)
imgRoute.get("/check-save/:idImg", checkSave)



export default  imgRoute;
    