const { getSunset } = require('sunrise-sunset-js');
const express = require('express');
const router = express.Router();


/* GET the sunset time. */
router.get('/:lat/:lon', function(req, res, next) {

  let lat = req.params['lat']
  let lon = req.params['lon']
  let result = {};
  result.sunset = getSunset(36.3729, 94.2088).toISOString();
  res.send(result);
});

module.exports = router;
