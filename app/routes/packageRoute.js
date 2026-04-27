const express = require('express');
const router = express.Router();
const packageController = require('../controllers/PackageController');

router.get('/', packageController.getAllPackages);
router.get('/search', packageController.SearchPackages);

module.exports = router;