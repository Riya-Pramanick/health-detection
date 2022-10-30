const express = require('express');
const router = express.Router();
const appController = require('../Controller/app.controller');


router.post('/',appController.appController);



module.exports = router;