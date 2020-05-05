
import React from 'react';

import './Home.css';
import first from './img/first.jpg';
import second from './img/second.jpg';
import third from './img/third.jpg';
import food1 from './img/food1.jpg';
import food2 from './img/food2.jpg';
import food3 from './img/food3.jpg';
import About from './About';
import Contact from './Contact';


const Home = () => {
return(
        


<div className = "perentone">
<div>


 
  <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
    <div class="container">
      <p class="navbar-brand">Welcome..!!</p>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="/About">About us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/App">SearchBar</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <header class="masthead text-center text-white">
    <div class="masthead-content">
      <div class="container">
        <h1>welcome guys..!!</h1>
        <h2 class="masthead-heading mb-0">Heres your Recipe Finder page</h2>
        <h3 class="masthead-subheading mb-0">Just search and have a look of your Fav food recipes... make it and share it with your friends.</h3>
        <a href="/App" class="btn btn-primary btn-xl rounded-pill mt-5">Go to SearchBar</a>
      </div>
    </div>
    <div class="bg-circle-1 bg-circle"></div>
    <div class="bg-circle-2 bg-circle"></div>
    <div class="bg-circle-3 bg-circle"></div>
    <div class="bg-circle-4 bg-circle"></div>
  
   </header>

  
    <br/>
        
      
    <div class="part2">
      <h2 className="part2h2">heres some lovely stories of mine with food and friends....!!</h2>
        <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 order-lg-2">
        <div class="p-5">
            <img class="img-fluid rounded-circle" src={food1} alt=""/>
          </div>
        </div>
        
        
        <div class="col-lg-6 order-lg-1">
          <div class="p-5">
            <h2 class="display-4">All friends together...chalo aaj kuch naya try kiya jaye!!.</h2>
            <p>its a lovely  when we eat food with our friends beacause everyone cook their own recipes on different topics on the table. we share lots of memories when we all friends go out together for meal like we always wait for one friend who always come late...nd that one friend is me always..hahahah and when we discuss about the money to pay at the end and friends like he will pay..hahah but its fun.sometimes we make a constant place to visit to eat specific food recipes.so somewhere  food and recipes are there with us to make that friendship bond more special.</p>
          </div>
        </div>
      </div>
    </div>


   
    

    <div class="container">

      
      <div class="row align-items-center">
        <div class="col-lg-6 order-lg-2">
          <div class="p-5">
            <img class="img-fluid rounded-circle" src={food2} alt=""/>
          </div>
        </div>

        <div class="col-lg-6 order-lg-1">
          <div class="p-5">
            <h2 class="display-4">Veg-Nonveg together..!!</h2>
            <p>This happens with every friend circle because every gang has vegetarian and nonvegetarian people in the group and nonveg people always make fun of their veg-friends and tell them to eat chiken n all. so this picture of mine with one of my non-vegetarian friend kahlo ya meri sister kahlo..hahah...so yaa she is the person who always tell me to eat nonveg....but i never listen to her. also this pic has more story to tell.....hahah but..leave it. so its fun when veg and nonveg people have food together. </p>
          </div>
        </div>
      </div>
         
    </div>

    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 order-lg-2">
          <div class="p-5">
            <img class="img-fluid rounded-circle" src={food3} alt=""/>
          </div>
        </div>
        
        
        <div class="col-lg-6 order-lg-1">
          <div class="p-5">
            <h2 class="display-4">Waiting for food to come.... With Friends.</h2>
            <p>According to me its the best part when we wait for food to come on the table with our friends because we do different types of things to pass the  time like playing different types of games,taking selfies, amazing talks about many faltu topics and making fun of our friends in front of them and so many things but we dont have any clue at that moment that we are making memories togather so its a best part.</p>
          </div>
        </div>
      </div>
    </div>
</div>
  <footer class="py-5 bg-black">
    <div class="container">
      <p class="m-0 text-center text-white small">Copyright &copy; HariomWork</p>
    </div>
  </footer>

        </div>
          

          </div>
);
};


export  default Home;