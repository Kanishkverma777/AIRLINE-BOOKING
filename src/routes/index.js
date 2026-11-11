const express = require('express');
const router = express.Router();

//v1 routes
const V1routes = require('./v1');

//v2 routes
const V2routes = require('./v2');

router.use('/v1', V1routes);
router.use('/v2', V2routes);

module.exports = router;