const express = require('express');
const FlyController = require('../controllers/flyController');
const router = express.Router();

router.get('/', FlyController.getAll)
.get('/:id', FlyController.getById)
.post('/', FlyController.create)
.put('/:id', FlyController.update)
.delete('/:id', FlyController.delete)
.delete('/', FlyController.deleteAll);

module.exports = router;