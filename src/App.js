import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";

import Header from "./Header";
import Home from "./Home";


function App() {
  return (
    <Router>
      <div className="app">

        <Routes>
          <Route path='/' element={<div><Header /><Home /></div>} />
          <Route path='/login' element={<div> <h1>Login Page</h1></div>} />
          <Route path='/checkout' element={<div><Header /> <h1>Checkout Page</h1></div>} />
        </Routes>

      </div>
    </Router>
  );
}


export default App;
