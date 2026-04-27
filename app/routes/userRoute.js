const express = require('express'); 
const router = express.Router();
const userController = require('../controllers/UserController'); 

router.post('/register', userController.userRegister);
router.get('/profile/:id', userController.getPerfil); 

module.exports = router; 