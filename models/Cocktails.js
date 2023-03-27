import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CocktailSchema = new Schema({
  user_id: {type:  String, required: false},
  name: {type: String, required: true},
  ingredients: {type: String, required: true},
  image: {type: String, required: true},
  instructions: {type: String, required: true},
  glass: {type: String, required: true}  

})

export const Cocktail = mongoose.model("Cocktail", CocktailSchema);