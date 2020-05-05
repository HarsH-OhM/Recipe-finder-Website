import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link,Switch,  BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
import Contact from './Contact';
import Recipe from './Recipe';
import routes from './router';



import {useRoutes, A} from 'hookrouter';

// const routing = (
//     <Router>
//         <div> 
//             <Route path= '/' Component={App} />       
//             <Route path='/Contact' Component={Contact} />
            
//         </div>
//         <hr />
//           <Switch>
//               <Route exact path='/' component={App} />
//               <Route path='/contact' component={Contact} />
              
//           </Switch>
//     </Router>
// )       //reacte router mathod it is


function Show() {
    const routeResult = useRoutes(routes);
    return routeResult;
    // return (
    //   <div className="Show">
        
    //     <A href="/Contact">Contacts Page</A> <br />
    //     <A href="/App">HOME Page</A>
     
    //   </div>
    // );
    
  }

 

ReactDOM.render(<Show />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

