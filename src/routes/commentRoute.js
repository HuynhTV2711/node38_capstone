import express from "express";
import { createComment, getCommentByIdImg } from "../controllers/commentController.js";


const commentRoute = express.Router();

commentRoute.get("/get-comment/:idImg", getCommentByIdImg)
commentRoute.post("/create-comment/:idImg", createComment)



export default  commentRoute;