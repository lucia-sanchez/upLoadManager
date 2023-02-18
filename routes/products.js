var express = require('express');
var router = express.Router();
//Desestructuramos del controlador de productos (productController)los 3 metodos que ya creé
const{addOneImage,storeOneImage, detailOneImage}=require('../controllers/productController')

/* /products */
router
  .get('/add-one-image', addOneImage)
  .post('/add-one-image', storeOneImage)
  .get('/detail-one-image', detailOneImage)

module.exports = router;
