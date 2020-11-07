import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './header';
import Sell from './sell';
import Ad from './ad';

 
class AppRouter extends React.Component{
    render(){
      return (
        <div>
        <Router>
            <Route exact path="/" component={Header}/>
            <Route path="/sell" component={Sell}/>
            <Route path="/attribute" component={Ad}/>
        </Router>
        
        
        </div> 
      );
    }
  }
  
export default AppRouter;