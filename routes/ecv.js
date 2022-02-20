const express = require('express');
const router = express.Router();

/* GET the sunset time. */
router.get('/', function(req, res, next) {
  let result = {};
  result.status = "OK";
  res.send(result);
});

module.exports = router;
