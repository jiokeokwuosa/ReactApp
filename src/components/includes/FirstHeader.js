import React, {Component} from "react";
import smallLogo from "../../assets/img/fcmb48x40.png";
 
class FirstHeader extends Component{
    render(){
        return(
            <header id="firstHeader" className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <img src={smallLogo} alt=""/>
                    </div>
                    <div className="col-md-6">
                        <p className="floatRight"><a href="#">Visit site</a></p>
                    </div>
                </div>
            </header> 
        );
    }
}
export default FirstHeader;
