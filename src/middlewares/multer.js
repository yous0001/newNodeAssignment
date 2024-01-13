import multer from "multer"

import { allowedExtensions } from "../utils/allowedExtensions.js";

export const multerMiddle = ({
    extensions = allowedExtensions.image,
    
}) => {


    const storage = multer.diskStorage({})

    const fileFilter = (req, file, cb) => {
        if (extensions.includes(file.mimetype.split('/')[1])) {
            return cb(null, true)
        }
        cb(new Error('Image format is not allowed!'), false)
    }


    const file = multer({ fileFilter, storage })
    return file
}