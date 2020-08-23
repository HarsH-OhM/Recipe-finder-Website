
import React, { useEffect, useState , Component} from 'react';


import './App.css';
import Recipe from './Recipe';
import style from './recipe.module.css';
import Contact from './components2/Contact';
import { Link, Router, Switch } from 'react-router-dom';
import { render } from '@testing-library/react';
import { useHistory } from 'react-router-dom'



const food = () => {

  const APP_ID = "c2eb042e";
  const APP_KEY = "1ae3878d815f7a051ee2faa1207b0975";

  const [recipes,setRecipes] = useState([]);                // to store all recipe data from api
  const [search, setSearch] = useState("");                  //to store the input search from search bar
  const [query,setQuery] = useState('pasta');           // to store queary which we gonna submit from search bar.               
  

  
  // function handleButtonClick() {
  //   let history = useHistory();    //Hooks can only be called inside the body of a function component.
  //   history.push('/Contact');
  // }

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
    setSearch('');         //to clear the input search after returning the data     
  }


  return(

      

    <div className="App">
      <div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-blue p-4">    
    {/* "bg-dark p-4" */}
      <h5 class="text-black h4">Go to Other pages:</h5>
      

      <hr />
      
      <ul>
      <li><a href='/Home'className="nav-link"> Home </a></li>
            <li><a href='/contact' className="nav-link">Contact</a></li>
            <li><a href='/About' className="nav-link">About</a></li>
           
          </ul>
                   
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</div>


        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text"  value={search} onChange={updateSearch}></input>
          <button className="search-button" type="submit">search</button>
          
        </form>

   
        

        
        <div className="recipes">
        {recipes.map(recipe =>(                                 //to map the array of recipe object from api
        <Recipe  
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients ={recipe.recipe.ingredients}
        />
        ))};

        </div>
      
    </div>


  );
        

        };

export default food;

//its flow of data like we are storing and fetching the data from api in usestate and getrecipes function then we are maping it. then returning it.
