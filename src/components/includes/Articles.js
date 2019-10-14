import React, {Component} from "react";
import Button from "./TicketButton";
 
class Articles extends Component{
    constructor(props){
        super(props);      
    }
    render(){
        let button;
        const element=this.props.tickets;
        if(element){
           button=<Button/>;
        }else{
           button='';
        }
        return(
            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-6">
                        <img src={this.props.image} alt=""/>
                    </div>
                    <div class="col-md-6">
                        <h6>{this.props.title}</h6>
                        <h6 class="date">{this.props.date}</h6>
                        <h5 class="content">{this.props.content}</h5>
                         {button}         
                        <button class="button2">Learn more</button>
                    </div>
                </div>
            </div> 
        );
    }
}
export default Articles;
