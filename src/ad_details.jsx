import React from 'react';
import './App.css';
import Logo from './images/olx.png';
// import Menu from './images/menu.png';
//import Olx from './images/chichi.png';
import Footer from './footer.jsx';
import {Link} from 'react-router-dom';





class ad_details extends React.Component{
    constructor()
    {
        super()
        this.state={
            
            price:'',
            description:'',
            locate:'',
            file:''
            
        }

    }
    // check=()=>{
    //     //console.log(this.props.location.ad_detailsProps)
    //     console.log(this.state.data);
    // }
    componentDidMount(){
        let a=this.props.location.price;
        let b=this.props.location.description;
        let c=this.props.location.locate;
        let d=this.props.location.file;
        this.setState({
            
            price:a,
            description:b,
            locate:c,
            file:d
            
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
                <br/>
                <br/>
                <div id="ad_div">
                    <h1 style={{color:"yellow"}}>PRODUCT DETAILS</h1>
                    <br/>
                    <img src={this.state.file} alt="" id="ad_img"/>
                    <div>
                    <h3>Rs:{this.state.price}</h3>
                    <p><strong>Description: </strong>{this.state.description}</p>
                    <h4>Location:{this.state.locate}</h4>
                    </div>
                </div>

                
                
                <br/>
               
                <br/>
                <br/>
                <Footer/>
                
            </div>
        )
    }
}
export default ad_details;