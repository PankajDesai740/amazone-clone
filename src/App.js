import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";


function App() {
  return (
    <Router>
      <div className="app">

        <Routes>
          <Route path='/' element={<div><Header /><Home /></div>} />
          <Route path='/login' element={<div> <h1>Login Page</h1></div>} />
          <Route path='/checkout' element={<div><Header/><Checkout/></div>} />
        </Routes>

      </div>
    </Router>
  );
}


export default App;
