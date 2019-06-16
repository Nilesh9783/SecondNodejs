var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home', function(req, res, next) {
  
  res.render('home');

});

router.get('/about', function(req, res, next) {
  res.render('about');

});

module.exports = router;
