const express = require('express');
const { getDataController } = require('../controller/dataControoler');
const router=express.Router();
 router.get('/',getDataController)
module.exports=router
