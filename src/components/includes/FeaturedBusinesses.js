import React, {Component} from "react";
import {Link} from 'react-router-dom'
 
class FeaturedBusiness extends Component{
    constructor(props){
        super(props);     
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-3">
                    <img src={this.props.image} alt=""/>
                </div>
                <div className="col-md-9">
                    <h5>{this.props.title}</h5>
                    <p>{this.props.contact}</p>
                    <Link to={'/'}><img src={this.props.image10} alt=""/></Link><Link to={'/'}><img src={this.props.image11} alt=""/></Link><Link to={'/'}><img src={this.props.image12} alt=""/></Link><Link to={'/'}><img src={this.props.image9} alt=""/></Link>
                </div>
            </div>
        );
    }
}
export default FeaturedBusiness;
