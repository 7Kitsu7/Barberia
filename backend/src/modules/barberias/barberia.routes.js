const express = require('express');
const router = express.Router();
const controller = require('./barberia.controller');

router.get('/', controller.getBarberias);
router.post('/', controller.createBarberia);

module.exports = router;