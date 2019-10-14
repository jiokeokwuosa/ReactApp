import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import NavBankingImage from "../../assets/img/179x39.png";
import Footer from "./Footer";

class Nav extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Router>
                <header className="header-area">       
                    <div className="main-header-area">
                        <div className="classy-nav-container breakpoint-off">
                            <div className="container">                  
                                <nav className="classy-navbar justify-content-between" id="razoNav">                    
                                    <a className="nav-brand" href="index.html"><Link to={'/'}><img src={NavBankingImage} /></Link></a>                       
                                    <div className="classy-navbar-toggler">
                                        <span className="navbarToggler"><span></span><span></span><span></span></span>
                                    </div>                     
                                    <div className="classy-menu">                        
                                        <div className="classycloseIcon">
                                            <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                                        </div>                        
                                        <div className="classynav">
                                            <ul id="nav">
                                                <li><Link to={'/'}>NEWS</Link></li>
                                                <li><Link to={'/about'}>BUSINESS DIRECTORY</Link></li>
                                                <li><Link to={'/about'}>TRADING PLACE</Link></li>  
                                                <li><Link to={'/about'}>FORUM</Link></li>  
                                                <li><Link to={'/about'}>EVENT</Link></li> 
                                            </ul>                                 
                                        </div>                                    
                                    </div>                        
                                </nav>
                            </div>                
                        </div>
                    </div>
                </header>                                
                <Switch>
                    <Route exact path='/' component={this.props.Homepage}/>
                    <Route path='/about' component={this.props.News}/>
                </Switch>
                

               <Footer/> 
            </Router> 
        );
    }
}
export default Nav;
