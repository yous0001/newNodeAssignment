import cloudinaryConnection from "../utils/cloudinary.js"

export const fileUpload =async (req, res, next) => {
    console.log(req.file)
    const data=await cloudinaryConnection().uploader.upload(req.file.path,{
        folder:"test",//folder name in cloudinary
        use_filename:true,//to send file with the same name
        unique_filename:false//to don't edit the file name
    })
    console.log(data)
    return res.status(200).json({ message: "User data:",data})
}

export const createemptyfolder = async (req, res, next) => {
    
    cloudinaryConnection().api.create_folder('test',console.log)
    return res.status(200).json({ message: "create success"})
}

export const deletefolder = async (req, res, next) => {
    
    cloudinaryConnection().api.delete_folder('test',console.log)
    return res.status(200).json({ message: "delete success"})
}