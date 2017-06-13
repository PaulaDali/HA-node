var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const context ={
title: 'Profile'
name: 'Paula'
age: 13
position: 'student'
hobbies: ['poll', 'drawing'],
}
  res.render('profile', context);
});

module.exports = router;
