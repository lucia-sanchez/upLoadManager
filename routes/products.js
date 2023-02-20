var express = require('express');
var router = express.Router();
//Desestructuramos del controlador de productos (productController)los 3 metodos que ya creé
const{addOneImage,storeOneImage, detailOneImage, addMultipleImages, storeMultipleImages, detailMultipleImages, addMainImage, detailMainImage, storeMainImage}=require('../controllers/productController')

const {upLoadImage}= require('../middleware/UpLoad')

/* /products */
router
  .get('/add-one-image', addOneImage)
  //En la ruta que viene con los datos del form agrego el nombre del metodo + single(si es una sola imagen)+ el name del input
  .post('/add-one-image', upLoadImage.single('image'), storeOneImage)
  .get('/detail-one-image/:id', detailOneImage)


  .get('/add-multiple-images', addMultipleImages)
  //En la ruta que viene con los datos del form agrego el middleware, el nombre del metodo + single(si es una sola imagen)+ el name del input
  .post('/add-multiple-images',upLoadImage.array('images'), storeMultipleImages)
  .get('/detail-multiple-images/:id', detailMultipleImages)

  .get('/add-main-image', addMainImage)
  //En la ruta que viene con los datos del form agrego el nombre del metodo + single(si es una sola imagen)+ el name del input
  .post('/add-main-image', upLoadImage.fields([{name: 'mainImage'},{name:'images'}]), storeMainImage)
  .get('/detail-main-image/:id', detailMainImage)



   module.exports = router;
