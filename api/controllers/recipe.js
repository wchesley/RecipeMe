const mongoose = require('mongoose');
const request = require('request');
let recipe = mongoose.model('Recipe');
let user = mongoose.model('User');
const http = require('https');

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


let getRandomRecipe = (req, res, next) => {
   try {
       http.get('https://www.themealdb.com/api/json/v1/1/random.php', data => {
           data.setEncoding('utf-8');
           let body = "";
           data.on('data', obj => {
               body += obj;
           })
           data.on('end', () => {
               //console.log('Grabbed'+ body);
               res.status(200).send(body);
               return;
           })
       })
   }
   catch(err) {
       res.status(500).send("ERROR:+ " + err).end();
       return;
   }
   //res.status(200);
}
//still on front end =>
let searchRecipe = (req, res, next) => {
    console.log(req.query.search);
    let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + req.query.search;
    try {
        http.get(url, data => {
            data.setEncoding('utf-8');
            let body ="";
            data.on('data', obj => {
                body += obj;
            })
            data.on('end', () => {
                console.log('found: ' + body);
                res.status(200).send(body).end();
                return body;
            })
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).send("ERROR: " + err).end();
        return;
    }
}

module.exports = {
    saveRecipe,
    getSavedRecipes,
    getRandomRecipe,
    searchRecipe,
}