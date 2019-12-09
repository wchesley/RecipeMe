const mongoose = require('mongoose');
const request = require('request');
let recipe = mongoose.model('Recipe');
let user = mongoose.model('User');
const http = require('http');

let saveRecipe = (req, res, next) => {
    user.findById({_id: req.body.id},(err, doc) => {
        if(err){
            res.status(500).send("Error reading database: " + err).end();
            return;
        }
        if(!doc && !err){
            res.status(404).send("user not found").end();
            return;
        }
        else {
            doc.recipesList.push({
                title:req.body.title,
                instructions:req.body.instructions,
                category:req.body.category,
                imgURL:req.body.imgURL,
                cuisine:req.body.cuisine,

            })
            doc.markModified('recipesList');
            doc.save();
            res.status(200).json(doc).end();;
        }
    })
}

let getSavedRecipes = (req, res, next) => {
    user.findById({ _id: req.query.id }, (err, doc) => {
        if (err) {
            console.log(err);
            res.status(403).send({ error: "Failed to find user..." });
            return;
        }
        //doc.recipesList is list of recipeID's saved for requesting User:
        //console.log(callback);
        res.status(200).json(doc);
        return;
    });
}

//moved to frontend: RecipeAPI service: 
let getRandomRecipe = (req, res, next) => {
    request.get('')
        .on('response', (response) => {
            console.log(response);
            //return response; 
        }).pipe(response);
    res.status(200);
    return;
}

let getRecipeByID = () => {

}

module.exports = {
    saveRecipe,
    getSavedRecipes,
    getRandomRecipe,

}