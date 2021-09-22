var express = require('express');
var secured = require('../lib/middleware/secured');
var router = express.Router();

/* GET user logged-in HTML. */
router.get('/logged', secured(), function (req, res, next) {
  res.render('logged.html');
});

/* GET user Product  HTML. */
router.get('/product', secured(), function (req, res, next) {
  res.render('product.html');
});

/* GET user About HTML. */
router.get('/about', secured(), function (req, res, next) {
  res.render('about.html');
});

/* GET banklist HTML. */
router.get('/banklist', secured(), function (req, res, next) {
  res.render('banklist.html');
});

/* GET UOB HTML. */
router.get('/deposit_uob', secured(), function (req, res, next) {
  res.render('deposit_uob.html');
});

/* GET banklist HTML. */
router.get('/deposit_ocbc', secured(), function (req, res, next) {
  res.render('deposit_ocbc.html');
});



// /* GET user profile. */
// router.get('/logged', secured(), function (req, res, next) {
//   const { _raw, _json, ...userProfile } = req.user;
//   res.render('logged.html', {
//     userProfile: JSON.stringify(userProfile, null, 2),
//     title: 'Profile page'
//   });
// });

module.exports = router;
