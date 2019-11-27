const mongoose = require('mongoose');
let recipe = mongoose.model('Recipe');

let saveRecipe = (req, rex, next) => {
    let Recipe = new recipe; 
    Recipe.instructions  = req.body.instructions; 
    Recipe.category = req.body.category;
    Recipe.cuisine = req.body.cuisine;
    Recipe.ingredients = req.body.ingredients;
    Recipe.imgURL = req.body.imgURL;
    Recipe.save((err) => {
        if(err){
            console.log(err);
            return;
        }
        else{return}
    })
}

module.exports = {
    saveRecipe,
}