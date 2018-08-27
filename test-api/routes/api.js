var express = require('express');
var router = express.Router();
 
// get method route
router.get('/', function (req, res) {
res.send('You sent a get request');
});
 
// post method route
router.post('/', function(req, res) {
res.send('You sent me ' + req.param('data'));
});
 
module.exports = router;