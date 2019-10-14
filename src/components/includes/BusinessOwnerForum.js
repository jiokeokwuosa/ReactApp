import React, {Component} from "react";
import {Link} from 'react-router-dom'
 
class BusinessOwnerForum extends Component{
    constructor(props){
        super(props);     
    }
    render(){
        return(
            <div className="col-md-4">
                <Link to={'/'}>
                    <img src={this.props.image1} alt=""/>
                    <div className="row">
                        <div className="col-md-3">
                        <img src={this.props.image2} alt=""/>
                        </div>
                        <div className="col-md-9">
                            <p>{this.props.content}</p>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}
export default BusinessOwnerForum;
