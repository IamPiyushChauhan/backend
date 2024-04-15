const express = require('express');
const router = express.Router();


const {addDataMiddleware} = require('../middleware/profileMiddleware')
const {postSaveProfile,postFetchData} = require('../controller/profileController');

router.post('/add',addDataMiddleware,postSaveProfile);
router.post('/fetch',addDataMiddleware,postFetchData);
module.exports = router;