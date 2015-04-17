var express = require('express');
var router = express.Router();
var items = require('../model/facade');

/* GET users listing. */
router.get('/items', function(req, res, next) {
  res.send(items.getAllItems());
});

router.get('/items/add/:item', function(req, res, next) {
    items.addItem(req.params.item);
    res.send("Item added: " +  req.params.item);
});

router.get('/items/remove/:item', function(req, res, next) {
    items.removeItem(req.params.item);
    res.send("Item removed: " + req.params.item);
});

module.exports = router;
