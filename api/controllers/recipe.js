const mongoose = require('mongoose');
let recipe = mongoose.model('Recipe');

let saveRecipe = (req, res, next) => {
    let Recipe = new recipe;
    Recipe.title = req.body.title; 
    Recipe.instructions  = req.body.instructions; 
    Recipe.category = req.body.category;
    Recipe.cuisine = req.body.cuisine;
    Recipe.ingredients = req.body.ingredients;
    Recipe.imgURL = req.body.imgURL;
    Recipe.save((err) => {
        if(err){
            console.log(err);
            res.status(403).send({error: "error saving to database"});
            return;
        }
        else{
            console.log("POST /api/saverecipe");
            res.status(200).json(Recipe);
            return; 
        }
    })
}

module.exports = {
    saveRecipe,
}