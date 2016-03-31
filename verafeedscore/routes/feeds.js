var express = require('express');
var logger = require('morgan');
var router = express.Router();

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/

/*
 * GET feedslist.
 */
router.get('/feedslist', function(req, res) {
    var db = req.db;
    var collection = db.get('feedslist');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

module.exports = router;
