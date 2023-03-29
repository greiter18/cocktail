import express from 'express';
const router = express.Router();
import passport from 'passport';
import {Cocktail} from '../../models/Cocktails.js'
import mongoose from 'mongoose';

router.get("/test",(req, res) => {
  res.json({msg: 'This is the cocktail route'});
})

router.get("/",(req, res) => {
  Cocktail
  .find()
  .sort({date: -1})
  .then(cocktail => res.json(cocktail))
  .catch(err => res.status(400).json(err))
})

router.get("/user/:user_id",
  passport.authenticate("jwt", {session: false}),
  (req, res) => {
    Cocktail
      .find({user_id: req.params.user_id})
      .then(cocktail => res.json(cocktail))
      .catch(err => res.status(400).json(err));
  }
)

router.get("/:id", (req,res) => {
  Cocktail
    .findById(req.params.id)
    .then(cocktail => res.json(cocktail))
    .catch(err => res.status(400).json(err))
  }
);

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

router.delete("/:cocktail_id", 
  passport.authenticate("jwt", {session: false}),
  (req,res) => {
    Cocktail.findByIdAndRemove(req.params.cocktail_id)
    .then((cocktails) => res.json(cocktails))
    .catch(err => res.status(400).json(err));
  }
)

export const cocktails = router;