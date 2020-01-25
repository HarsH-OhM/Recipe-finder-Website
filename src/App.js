import React, { useEffect, useState } from 'react';

import './App.css';
import Recipe from './Recipe';


const App = () => {

  const APP_ID = "c2eb042e";
  const APP_KEY = "1ae3878d815f7a051ee2faa1207b0975";

  const [recipes,setRecipes] = useState([]);                // to store all recipe data from api
  const [search, setSearch] = useState("");                  //to store the input search from search bar
  const [query,setQuery] = useState('chicken');           // to store queary which we gonna submit from search bar.               

  useEffect( () => {
   getRecipes();
    
  }, [query]);        //it will only show the typed query from recipe data.

  const getRecipes = async () => {
    
    const response = await fetch(                              //requesting and geting the data from api
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
    

    // fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    // .then(response => {
    //   response.json();
    // })
  }

  const updateSearch = e => {              //created an  event (e) in function for onchange 
    setSearch(e.target.value);    //input search
    // console.log(search);
  }

  const getSearch = e => {             //event for onChange submit button
    e.preventDefault();       //to stop the page refresh
    setQuery(search);           
  }

  return(
    <div className="App">
      
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
          <button className="search-button" type="submit">search</button>
          <p>info about your search will be render here..</p>



        </form>
        {recipes.map(recipe =>(                                 //to map the array of recipe object from api
        <Recipe  
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}/>
        ))};
      
    </div>
  );

};

export default App;

//its flow of data like we are storing and fetching the data from api in usestate and getrecipes function then we are maping it. then returning it.