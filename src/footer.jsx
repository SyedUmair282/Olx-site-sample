import React from 'react';
import './footer.css';
import * as Icon from 'react-bootstrap-icons';


class Footer extends React.Component{
    render(){
        return(
            <div>
                <div className="container-fluid" id="main-footer">
                    <div className="row">
                        <div className="col-md-2" className="footer-col">
                            <br/>
                            <h6 className="footer-h6">POPULAR CATEGORIES</h6>
                            <ul className="footer-ul">
                                <li className="footer-li">Cars</li>
                                <li className="footer-li">Flats for rent</li>
                                <li className="footer-li">Jobs</li>
                                <li className="footer-li">Mobile phones</li>
                            </ul>
                            <br/>
                        </div>
                        <div className="col-md-2" className="footer-col">
                            <br/>
                            <h6 className="footer-h6">TRENDING SEARCHES</h6>
                            <ul className="footer-ul">
                                <li className="footer-li">Bikes</li>
                                <li className="footer-li">Watches</li>
                                <li className="footer-li">Books</li>
                                <li className="footer-li">Dogs</li>
                            </ul>
                            <br/>
                        </div>
                        <div className="col-md-2" className="footer-col">
                            <br/>
                            <h6 className="footer-h6">ABOUT US</h6>
                            <ul className="footer-ul">
                                <li className="footer-li">About Olx group</li>
                                <li className="footer-li">Olx blog</li>
                                <li className="footer-li">Contact us</li>
                                <li className="footer-li">Businesses</li>
                            </ul>
                            <br/>
                        </div>
                        <div className="col-md-2" className="footer-col">
                            <br/>
                            <h6 className="footer-h6">OLX</h6>
                            <ul className="footer-ul">
                                <li className="footer-li">Help</li>
                                <li className="footer-li">Sitemap</li>
                                <li className="footer-li">Legal & Privacy information</li>
                            </ul>
                            <br/>
                        </div>
                        <div className="col-md-3" className="footer-col">
                            <br/>
                            <h6 className="footer-h6">FOLLOW US</h6>
                            <ul className="footer-ul">
                                <li className="footer-li-1">&#120307;</li>
                                <li className="footer-li-1"><Icon.CameraVideo/></li>
                                <li className="footer-li-1"><Icon.Camera2/></li>
                                <li className="footer-li-1"><Icon.Phone/></li>
                            </ul>
                            <br/>
                        </div>
                    </div>
                </div>
                    <div className="container-fluid" id="last-footer">
                        <div className="row">
                            <div className="col-md-6" id="label1">
                            <p>Other Countries India - South Africa - Indonesia</p>
                            </div>
                            <div className="col-md-6"id="label2">
                            <p>Free Classifieds in Pakistan. © 2006-2020 OLX</p>
                            </div>
                        </div>
                    </div>
            </div>
        );

    }
}
export default Footer;