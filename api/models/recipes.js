const mongoose = require('mongoose');

let ingredientSchema = new mongoose.Schema({
    item:String,
    amount:String,
});

let recipeSchema = new mongoose.Schema({
    title: String,
    instructions: String,
    category: String,
    cuisine: String,
    //ingredients:[{type:String}],
    imgURL:String,
});

mongoose.model('Recipe', recipeSchema);