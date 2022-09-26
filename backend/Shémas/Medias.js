const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creation du shéma User pour ensuite avoir un modéle de ce type ;

const MediasSchema = new Schema({
    Categorie:  String,
    City: String,
    Users: String,
    Keyword: String,
    Rate:Number,
  });
 

const Medias =  mongoose.model('Medias', MediasSchema)

module.exports = Medias