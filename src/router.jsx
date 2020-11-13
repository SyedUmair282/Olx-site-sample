import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './header';
import Sell from './sell';
import Ad from './ad';
import ad_details from './ad_details';

 
class AppRouter extends React.Component{
    render(){
      return (
        <div>
        <Router>
            <Route exact path="/" component={Header}/>
            <Route path="/sell" component={Sell}/>
            <Route path="/attribute" component={Ad}/>
            <Route path="/ad_details/" component={ad_details}/>
        </Router>
        
        
        </div> 
      );
    }
  }
  
export default AppRouter;