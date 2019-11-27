const mongoose = require('mongoose');

let ingredientSchema = new mongoose.Schema({
    item:String,
    amount:String,
});

let recipeSchema = new mongoose.Schema({
    instructions: String,
    category: String,
    cuisine: String,
    ingredients:[ingredientSchema],
    imgURL:String,
});

mongoose.model('Recipe', recipeSchema);