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
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";


function App() {
  const [{basket}, dispatch]=useStateValue();
  //useEffect 
  //Piece of code which runs based on given condition
  useEffect(() =>{
    auth.onAuthStateChanged((authUser) =>{
      if(authUser){
        //use logged in
      } else{
        //user logged out
      }
    })
  },[])
  return (
    <Router>
      <div className="app">

        <Routes>
          <Route path='/' element={<div><Header /><Home /></div>} />
          <Route path='/login' element={<div> <Login/></div>} />
          <Route path='/checkout' element={<div><Header/><Checkout/></div>} />
        </Routes>

      </div>
    </Router>
  );
}


export default App;
