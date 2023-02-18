const multer =require('multer');
const path =require('path');

const storageOneImage = multer.diskStorage({
    //Donde lo voy a guardar
    destination : function (req, file,cb){
        cb(null, 'public/images/products')
    },
    //con que nombre lo guardo
    filename : function(req,file,cb){
        cb(null, `${Date.now()}_products${path.extname(file.originalname)}`)
    }
});
const upLoadImage = multer({storage : storageOneImage }) 
module.exports ={
    upLoadImage
}