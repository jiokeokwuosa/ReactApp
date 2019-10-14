import React, {Component} from "react";
import HomePageLogo from "../../assets/img/home page.png";
 
class SecondHeader extends Component{
    render(){
        return(
            <header id="secondHeader" className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <img src={HomePageLogo} alt=""/> <span>Family Community</span>
                    </div>
                    <div className="col-md-1"> 
                        <b>Member</b><br/> 1,200,400
                    </div>
                    <div className="col-md-7">
                        <p className="floatRight"><a href="#">Make Review</a> <span>Complaints/Customer Service</span></p>
                    </div>             
                </div>
            </header> 
        );
    }
}
export default SecondHeader;
