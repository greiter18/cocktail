import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const Homepage = () => {
  const [info, setInfo] = useState('');
  const [drinks, setDrink] = useState([]);

  const handleChange = (event) => {
    setInfo(event.target.value)
  }

  const options = {headers: {common: null}}

  const getDrink = () => {
   //https:www.thecocktaildb.com/api/json/v1/1/filter.php?i=${info}
    //axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${info}`)
    axios.get(`https:www.thecocktaildb.com/api/json/v1/1/filter.php?i=${info}`, options)
      .then((res) => {setDrink(res.data.drinks)})
      .catch(err => console.log(`ERRRORRR: ${err}`))
  }

   const drinkList = drinks?.map((drink, i) => {
    console.log(`drink: ${drink}`)
    return (

    <li key = {i}> <img style={{width: 70}} src={drink.strDrinkThumb} alt="drink image" />  {drink.strDrink}</li>)
  }) 



  return (
    <div>
      {/* {console.log(`info:::: ${info}`)}
      {console.log(`drinks: ${drinks}`)} */}
      <h1>Cocktail App</h1>
      <div>
        <input type="text" onChange={handleChange}/>
        <br />
        <button onClick={() => getDrink()}>Enter Ingredient</button>
        
      <ul>{drinkList}</ul>  
      </div>
    </div>
  )
}

export default withRouter(Homepage);