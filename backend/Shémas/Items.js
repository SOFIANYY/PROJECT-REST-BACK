const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creation du shéma User pour ensuite avoir un modéle de ce type ;

const ItemsSchema = new Schema({
    Author:  String,
    Year: Date,
    Rates: Number ,
  });
 

const Items =  mongoose.model('Items', ItemsSchema)

module.exports = Items