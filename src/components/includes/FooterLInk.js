import React, {Component} from "react";
import {Link} from 'react-router-dom'

class MyLink extends Component{
    constructor(props){
        super(props);      
    }
    render(){
        return<li><Link to={'/'}>{this.props.text}</Link></li>;
    }
}
export default MyLink;
