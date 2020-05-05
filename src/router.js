import React from "react";
import Contact from "./Contact";
import App from './App';
import Home from './Home';
import About from './About';



const routes = {
  "/": () => <Home/>,

  "/App": () => <App />,
  
  "/contact": () => <Contact />,

  "/About": () => <About/>
  

};
export default routes;