import React from "react";
import Contact from "./components2/Contact";
import App from './App';
import Home from './components2/Home';
import About from './components2/About';



const routes = {
  "/App": () => <App/>,

  "/Home": () => <Home />,
  
  "/contact": () => <Contact />,

  "/About": () => <About/>
  

};
export default routes;