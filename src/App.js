import React, { useEffect, useState } from 'react';

import './App.css';
import Recipe from './Recipe';


const App = () => {

  const APP_ID = "c2eb042e";
  const APP_KEY = "1ae3878d815f7a051ee2faa1207b0975";

  const [recipes,setRecipes] = useState([]);                // to store all recipe data from api

  useEffect( () => {
   getRecipes();
    
  }, []);

  const getRecipes = async () => {
    
    const response = await fetch(                              //requesting and geting the data from api
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
    

    // fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    // .then(response => {
    //   response.json();
    // })
    
  
  }

  return(
    <div className="App">
      
        <form className="search-form">
          <input className="search-bar" type="text"></input>
          <button className="search-button" type="submit">search</button>



        </form>
        {recipes.map(recipe =>(                                 //to map the array of recipe object from api
        <Recipe  title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}/>
        ))};
      
    </div>
  );

};

export default App;
