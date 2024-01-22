import express from "express";
import { deleteimgbyId, getUser, getlistbyUseridCreate, getlistbyUseridSave } from "../controllers/imgManageController.js";
import { khoaApi } from "../config/jwt.js";
import { createImg, storage } from "../controllers/uploadController.js";





const imgManageRoute = express.Router();

imgManageRoute.get("/get-user",khoaApi,getUser)
imgManageRoute.get("/getlistbyUseridSave/:UserId",khoaApi,getlistbyUseridSave)
imgManageRoute.get("/getlistbyUseridCreate/:UserId",khoaApi,getlistbyUseridCreate)
imgManageRoute.delete("/deleteimgbyId/:ImgId",khoaApi,deleteimgbyId)
imgManageRoute.post("/create-img/:user_id",storage.single("file"),createImg);




export default imgManageRoute;