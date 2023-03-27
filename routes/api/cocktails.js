import express from 'express';
const router = express.Router();
import passport from 'passport';
import {Cocktail} from '../../models/Cocktails.js'
import mongoose from 'mongoose';

router.get("/test",(req, res) => {
  res.json({msg: 'This is the cocktail route'});
})

router.post("/", 
  passport.authenticate("jwt", {session:false}),
  (req,res) => {
    console.log('Makign a new cocktail//////')
    const newCocktail = new Cocktail({
      name: req.body.name,
      ingredients: req.body.ingredients,
      image: req.body.image,
      glass: req.body.glass,
      user_id: req.user.id,
      instructions: req.body.instructions
    })
    console.log(newCocktail); 
    console.log('SAVING NEW COCKTAIL')
    newCocktail
    .save()
    .then(cocktail => res.json(cocktail))
  }
)


export const cocktails = router;