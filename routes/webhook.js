var express = require('express');
var router = express.Router();

/* POST users listing. */
router.post('/', function(req, res, next) {
  res.send(JSON.stringify(req));
});

module.exports = router;
