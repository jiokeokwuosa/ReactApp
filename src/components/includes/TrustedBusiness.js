import React, {Component} from "react";
 
class TrustedBusiness extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="col-md-4">
                <div className="row">
                    <div className="col-md-12">
                        <img src={this.props.image} alt=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h4>{this.props.title}</h4>
                        <h6>{this.props.description}</h6>
                    </div>
                </div>
           </div>
        );
    }
}
export default TrustedBusiness;
