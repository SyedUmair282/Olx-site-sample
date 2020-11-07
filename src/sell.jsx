import React from 'react';
import './sell.css';
import Logo from './images/olx.png';
import {Link} from 'react-router-dom';


class Sell extends React.Component{
    render(){
      return (
        <div>
        
          <div className="container-fluid" id="back-container">
            <div className="row">
                <Link to="/"><button className="btn btn-white" id="back">&#9664;</button></Link>
                <img src={Logo} alt="" id="img3"/>
            </div>
          </div>
          <h2>POST YOUR AD</h2>
          <div className="container-fluid" id="ad-container">
            <h5>CHOOSE A CATEGORY</h5>
            <div className="dropdown">
            <button className="dropbtn">&#128241;Mobiles</button>
            <div className="dropdown-content">
            <Link to="/attribute">Acessories</Link>
            <Link to="/attribute">Phones</Link>
            </div>
            </div>
            <br/>
            <br/>
            <div className="dropdown">
            <button className="dropbtn">&#128680;Cars</button>
            <div className="dropdown-content">
            <Link to="/attribute">Cars</Link>
            <Link to="/attribute">Spare Parts</Link>
            </div>
            </div>
            <br/>
            <br/>
            <div className="dropdown">
            <button className="dropbtn">&#128690;Motor Cycles</button>
            <div className="dropdown-content">
            <Link to="/attribute">Motor-Cycles</Link>
            <Link to="/attribute">Spare Parts</Link>
            <Link to="/attribute">Acessories</Link>
            </div>
            </div>
            <br/>
            <br/>
            <div className="dropdown">
            <button className="dropbtn">&#128187;Laptops</button>
            <div className="dropdown-content">
            <Link to="/attribute">New</Link>
            <Link to="/attribute">Old</Link>
            <Link to="/attribute">Acessories</Link>
            </div>
            </div>
            <br/>
            <br/>
          </div>
          <div className="container-fluid" id="sell-footer">

            <p id="sell-label">Free Classifieds in Pakistan. © 2006-2020 OLX</p>
          </div>
          
          
        
        
        </div> 
      );
    }
  }
  
export default Sell;