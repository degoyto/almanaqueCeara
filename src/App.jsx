import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./Components/Home/Home"  
import CustomNavbar from "./Components/Header/CustomNavbar"
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <CustomNavbar></CustomNavbar>
        {/* <Route exact path="/" component={Home}/> */}
      </div>
    </Router>
  );
}

export default App;
