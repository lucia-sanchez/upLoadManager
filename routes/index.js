var express = require('express');
var router = express.Router();

const {home} = require('../controllers/mainController')
/* llego desde / */

router
  .get('/', home);

module.exports = router;
