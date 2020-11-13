import React from 'react';
import './App.css';
import Logo from './images/olx.png';
import Menu from './images/menu.png';
import Olx from './images/chichi.png';
import Footer from './footer.jsx';
import {Link} from 'react-router-dom';
import firebase from './firebase.jsx';



class Header extends React.Component{
    constructor()
    {
        super()
        this.state={
            
            
            ad:[]
            
        }

    }
    
    componentDidMount(){
        firebase.database().ref('AD-ITEMS').on('child_added',data=>{
            
            
            let obj={
                price:data.val().price,
                locate:data.val().locate,
                description:data.val().description,
                file:data.val().file
            }
            this.setState({
                ad:this.state.ad=[...this.state.ad,obj]
            })
            
            
        })
    }
    
    
    render(){
        
        return(
            <div>

                <div className="container-fluid" id="header-container">
                    <div className="row">

                        <div className="col-md-1">
                        <img style={{marginTop:'5px'}} src={Logo} alt=""/>
                        </div>

                        <div className="col-md-3">
                        <select name="location" className="location">
                        <option value="Pakistan">Pakistan</option>
                        <option value="sindh">&#9990;Sindh</option>
                        <option value="punjab">&#9990;Punjab</option>
                        <option value="balochistan">&#9990;Balochistan</option>
                        <option value="kpk">&#9990;K.P.K</option>
                        </select>
                        </div>

                        <div className="col-md-5">
                        <input type="text" placeholder="Find mobile phones,cars more..." name="search" className="search"/>
                        <button className="btn btn-dark" type="button">&#128269;</button>
                        </div>

                        <div className="col-md-3" style={{textAlign:'center'}} >
                        <button className="btn btn-info" type="button" id="login" >Login</button>
                        <Link to="/sell"><button className="btn" type="button" id="sell">&#10010;SELL</button></Link>
                        </div>
                    </div>
                </div>

                <div className="container-fluid" id="menu-container">
                    <div className="row">
                        <ul>
                            <li><label>ALL CATEGORIES</label></li>
                            <li><button type="button" className="menu">Mobile phones</button></li>
                            <li><button type="button" className="menu">Cars</button></li>
                            <li><button type="button" className="menu">Motor Cycles</button></li>
                            <li><button type="button" className="menu">Laptops</button></li>
                        </ul>
                        <img style={{marginTop:'-10px',width:'100%'}} src={Menu} alt="" id="img2"/>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="container-fluid" id="component-container">
                <h3>FRESH RECOMMENDATIONS</h3>
                    <div className="row">
                    {this.state.ad.map((v,i)=>{
                        return <Link to={{pathname:'/ad_details',price:v.price,description:v.description,locate:v.locate,file:v.file}} key={i} id="link">
                        <div className="card">
                        <img className="card-img-top" src={v.file} alt="Card image cap" style={{height:"140px",width:"238px"}}/>
                        <div className="card-body" id="link1">
                        <h3 className="card-title">Rs:{v.price}</h3>
                        <p className="card-text">{v.description}</p>
                        <h4>{v.locate}</h4>
                        </div>
                        </div>
                        </Link>
                    })}
                    </div>
                </div>
                <br/>
                <br/>
                <div className="container-fluid" id="menu-container">
                    <div className="row">
                        <img style={{marginTop:'-15px',width:'100%'}} src={Olx}  id="img2"/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Header;