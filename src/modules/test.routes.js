import { Router } from "express";
import * as testController from './test.controller.js';
import { multerMiddle } from "../middlewares/multer.js";
import { allowedExtensions } from "../utils/allowedExtensions.js";
import expressAsyncHandler from "express-async-handler";

const router =Router()


router.post('/upload',
    multerMiddle({
        extensions: allowedExtensions.image
    }).single('image'),
    expressAsyncHandler(testController.fileUpload))
router.put('/createtest',expressAsyncHandler(testController.createemptyfolder))
router.delete('/deletetest',expressAsyncHandler(testController.deletefolder))

export default router