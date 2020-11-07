import React from 'react';
import {Link} from 'react-router-dom';
import Logo from './images/olx.png';
import './ad.css';
import './sell.css';
import firebase from './firebase.jsx';

class Ad extends React.Component{
    constructor(){
        super()
        this.state={
           
            
            price:'',
            locate:'',
            description:'',
            file:''
        }  
    }
    upload = async (e)=>{
    const file=e.target.files[0];
    const base64= await this.convertBase64(file)
    this.state.file=base64
   }
   convertBase64=(file)=> {
    return new Promise((resolve,reject)=>{
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload =  () => {
            resolve(reader.result);
        };
        reader.onerror = (error)=> {
            reject(error);
        };
    })
    
}
    set_data=()=>{
        
        let key=firebase.database().ref().push().key;
        let obj={
            key:key,
            price:this.state.price,
            locate:this.state.locate,
            description:this.state.description,
            file:this.state.file
            
        }
        firebase.database().ref('AD-ITEMS').child(key).set(obj);
        alert("Your Ad has been posted (THANKYOU)....!!!");
    }
   
    render(){
        let {price,locate,description} = this.state;
        return(
            <div>
                <div className="container-fluid" id="back-container">
                    <div className="row">
                    <Link to="/sell"><button className="btn btn-white" id="back">&#9664;</button></Link>
                    <img src={Logo} alt="" id="img3"/>
                    </div>
                </div>
                <p id="ad-para">POST YOUR AD</p>
                <div className="container-fluid" id="att-container">
                    <p id="ad-para2">INCLUDE SOME DETAILS</p>
                    
                    
                    <p>Description*</p>
                    <input type="text" maxLength="50" className="input-data" onChange={(e)=>this.setState({description:e.target.value})} value={description}/>
                    <br/>
                    <br/>
                    <hr style={{border:'1px solid black'}}/>
                    <p id="ad-para2">SET A PRICE</p>
                    <p>Price*</p>
                    <input value={price} type="text" className="input-data" onChange={(e)=>this.setState({price:e.target.value})}/>
                    <br/>
                    <br/>
                    <hr style={{border:'1px solid black'}}/>
                    <p id="ad-para2">LOCATION</p>
                    <p>State*</p>
                    <input value={locate} type="text" className="input-data" onChange={(e)=>this.setState({locate:e.target.value})}/>
                    <br/>
                    <br/>
                    
                    <hr style={{border:'1px solid black'}}/>
                    <p id="ad-para2">UPLOAD A PICTURE</p>
                    <p>Photo*</p>
                    <input type="file"  className="input-data" onChange={(e)=>{this.upload(e)}} />
                    <br/>
                    <br/>
                    <hr style={{border:'1px solid black'}}/>
                 {this.state.file=="" || this.state.locate=="" || this.state.price=="" || this.state.description=="" ? <button className="btn btn-dark" disabled={!this.state.locate} onClick={this.set_data} >Post Ad</button> :<button className="btn btn-dark" onClick={this.set_data} >Post Ad</button>}   
                    <br/>
                    <br/>
                </div>
                <br/>
                <br/>
                
                
                <div className="container-fluid" id="post-footer">
                    <p id="post-label">Free Classifieds in Pakistan. © 2006-2020 OLX</p>
                </div>





            </div>

        );


    }

}
export default Ad;