import React, {Component} from "react";
import FooterLink from "./FooterLInk";
 
class Footer extends Component{
    constructor(props){
        super(props);      
    }
    render(){
        return(
            <div id="footer" className="container-fluid">
                <div className="row firstRow">
                    <div className="col-md-3 partTwo">
                        <div className="row">
                            <div className="col-md-12">
                                <h4>LINKS</h4>
                                <hr/>
                                <ul>  
                                    <FooterLink text='Trading Place'/>  
                                    <FooterLink text='News'/>  
                                    <FooterLink text='Event'/>                             
                                    <FooterLink text='Business Directory'/> 
                                    <FooterLink text='Forum'/> 
                                    <FooterLink text='Review'/>                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 partTwo">
                        <div className="row">
                            <div className="col-md-12">
                                <h4>USERS</h4>
                                <hr/>
                                <ul>       
                                    <FooterLink text='Add Business'/>  
                                    <FooterLink text='Remove Company'/>                       
                                    <FooterLink text='Signup'/>  
                                    <FooterLink text='Contact Us'/>                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 partTwo">
                        <div className="row">
                            <div className="col-md-12">
                                <h4>MAIN CATEGORIES</h4>
                                <hr/>
                                <ul>  
                                    <FooterLink text='Logistics Companies'/>  
                                    <FooterLink text='Travel Agencies'/>                       
                                    <FooterLink text='Construction Companies'/>  
                                    <FooterLink text='Cleaning Companies'/>   
                                    <FooterLink text='IT Companies'/>   
                                    <FooterLink text='Insurance Companies'/> 
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 partThree">
                        <div className="row">
                            <div className="col-md-12">
                                <h4>DATABASE</h4>
                                <hr/>
                                <div className="row">
                                    <div className="col-md-5">
                                        150,000<br/>COMPANIES
                                    </div>
                                    <div className="col-md-1"></div>
                                    <div className="col-md-5 shift1">
                                        25,301<br/>PHOTOS
                                    </div>
                                </div>
                                <div className="row shift">
                                    <div className="col-md-5">
                                        3,803<br/>REVIEWS
                                    </div>
                                    <div className="col-md-1"></div>
                                    <div className="col-md-5 shift1">
                                        15,370<br/>PRODUCTS
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row secondRow">
                    <div className="col-md-12">
                    ©2019 Copyright FCMB 2019. All rights reserved. Website developed by  <FooterLink text='ECSCORP'/> 
                    </div>     
                </div>
            </div>
        );
    }
}
export default Footer;
