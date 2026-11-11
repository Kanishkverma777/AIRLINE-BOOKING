const express = require('express');

const router = express.Router();

router.get('/info', (req, res) => {
  return res.json({ msg : 'This is response is cooming form v2 route'}) 
});

module.exports = router;