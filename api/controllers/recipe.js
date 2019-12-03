const mongoose = require('mongoose');
let recipe = mongoose.model('Recipe');
let user = mongoose.model('User');

let saveRecipe = (req, res, next) => {
    let Recipe = new recipe;
    Recipe.title = req.body.title; 
    Recipe.instructions  = req.body.instructions; 
    Recipe.category = req.body.category;
    Recipe.cuisine = req.body.cuisine;
    //Recipe.ingredients = req.body.ingredients;
    Recipe.imgURL = req.body.imgURL;
    Recipe.save((err, savedObj) => {
        if(err){
            console.log(err);
            res.status(403).send({error: "error saving to database"});
            return;
        }
        else{
            objref = savedObj.id;
            console.log("SAVED:"+objref);
            user.findOneAndUpdate(
                {email: Recipe.user},
                {$push: {recipesList:objref}}, (err) =>{
                    if(err){
                        console.log(err);
                    }
                })
            res.status(200).json(Recipe);
            return; 
        }
    })
}

module.exports = {
    saveRecipe,
}