const express = require('express');

const router = express.Router();

const V1routes = require('./v1');


router.use('/v1', V1routes);

module.exports = router;