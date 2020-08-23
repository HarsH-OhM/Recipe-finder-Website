
import React, { Component } from 'react';
import './About.css';
import mine from '../img/mine.JPG';




class About extends Component{

    // state={                        //like button example code
    //     count: 0
    // }

    // likebtn = () => {

    //     let newCount = this.state.count + 1;
    // this.setState({
    //   count: newCount
    // });

    // };
   

        

    render(){
        return(

<div className="parent">
<nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
  <div class="container"> 
    
    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active"><a href="/Home" class="nav-link font-italic"> Home </a></li>
        <li class="nav-item active"><a href="/About" class="nav-link font-italic"> About </a></li>
        <li class="nav-item active"><a href="/contact" class="nav-link font-italic"> Contact</a></li>
        <li class="nav-item active"><a href="/App" class="nav-link font-italic">SearchBar</a></li>
      </ul>
    </div>
  </div>
</nav>

<div class="bg-light">
  <div class="container py-5">
    <div class="row h-100 align-items-center py-5">
      <div class="col-lg-6">
        <h1 class="display-4">About This Site</h1>
        <p class="lead  mb-0">it's a react and bootstrap based website where you can search various food recipes.it has some good features of reactjs which i have used in coding part. i have used an api for recipes  and emailjs service so that users can send me the feedback through email from client side itself. </p>
        <h5>for more details cheak my github profile: <a href="https://github.com/HarsH-OhM">click here!</a></h5>
        <h4 class="display-4">About me</h4>
        <p>Hariom Malviya</p>
        <p>Full-Stack Developer & IOT Automation Developer</p>
        <p>Contact:gurjarhariom3114@gmail.com</p>
        <p>linkedin Profile:<a href="https://www.linkedin.com/in/hariom-malviya-614160148/">click here!</a></p>
        
      </div>
      <div class="col-lg-6 d-none d-lg-block"><img src={mine} alt="" class="img-fluid rounded-circle"/></div>
    </div>
    {/* <div class="like">               //like button code
       <h4>If you like my work..please click the like button.</h4>
        <button onclick={this.likebtn}>Likes: {this.state.count}</button>
        <p>Show some Love.</p>    
       
         
     </div> */}
  </div>
</div>   
  
</div>


        );
    }
}

export default About;