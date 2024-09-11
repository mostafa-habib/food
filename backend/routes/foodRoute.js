import express from "express"
import multer from 'multer'
import { addFood } from "./../controllers/foodControllers.js";

const foodRouter = express.Router();

// Image Storage Engine

const storgae = multer.diskStorage({
    destination:"uploads",
    filename: (req,file,cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
});

const upload = multer({storgae: storgae});

foodRouter.post("/add", upload.single('image'), addFood);








export default foodRouter;