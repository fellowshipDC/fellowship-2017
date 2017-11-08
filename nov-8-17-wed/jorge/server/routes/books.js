var express = require('express');
var router = express.Router();
var csv = require('csvtojson');

/* GET users listing. */
/* READ ALL */
router.get('/', function(req, res, next) {
    csv()
    .fromFile('./books.csv')
    .on('json', (json) => {
      res.json(json);
    })
    .on('done', (error) => {

    });
});

/* READ ONE */
router.get('/:id', function(req, res, next) {
    console.log(req.params);
    res.json({})
});

module.exports = router;
