var express = require('express');
const fileControllers = require('../controllers/fileControllers');
var router = express.Router();
const userControllers = require('../controllers/userControllers')

router.post('/signup',userControllers.signup)
router.post('/login',userControllers.login)

router.post('/upload',fileControllers.fileUpload)

module.exports = router;
