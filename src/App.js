import React, {Component} from "react";
import "./assets/css/style.css";
import "./assets/css/nav.css";
// import "./assets/js/core";
// import "./assets/js/razo.bundle.js";
import FirstHeader from "./components/includes/FirstHeader";
import SecondHeader from "./components/includes/SecondHeader";
import Homepage from "./components/pages/Homepage";
import News from "./components/pages/News";
import NavBar from "./components/includes/Nav";

class App extends Component{
  render(){
    return (        
          <div>
            <FirstHeader/>  
            <SecondHeader/>           
            <NavBar Homepage={Homepage} News={News}/>            
          </div>      
      
    );
  }
}

export default App;
