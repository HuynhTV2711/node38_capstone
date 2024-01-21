import express from "express";
import { createComment, getCommentByIdImg } from "../controllers/commentController.js";
import { khoaApi } from "../config/jwt.js";


const commentRoute = express.Router();

commentRoute.get("/get-comment/:idImg", getCommentByIdImg)
commentRoute.post("/create-comment/:idImg", khoaApi, createComment)



export default  commentRoute;