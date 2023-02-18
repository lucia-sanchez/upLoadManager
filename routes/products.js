var express = require('express');
var router = express.Router();
//Desestructuramos del controlador de productos (productController)los 3 metodos que ya creé
const{addOneImage,storeOneImage, detailOneImage}=require('../controllers/productController')

const {upLoadImage}= require('../middleware/UpLoad')

/* /products */
router
  .get('/add-one-image', addOneImage)
  //En la ruta que viene con los datos del form agrego el nombre del metodo + single(si es una sola imagen)+ el name del input
  .post('/add-one-image', upLoadImage.single('image'), storeOneImage)
  .get('/detail-one-image/:id', detailOneImage)

module.exports = router;
