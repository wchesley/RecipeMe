var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
let ctrlRecipe = require('../controllers/recipe');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

router.post('/saverecipe', ctrlRecipe.saveRecipe);
router.get('/UserRecipes', ctrlRecipe.getSavedRecipes);
router.get('/getrandom', ctrlRecipe.getRandomRecipe);
router.get('/searchRecipe', ctrlRecipe.searchRecipe)

module.exports = router;
