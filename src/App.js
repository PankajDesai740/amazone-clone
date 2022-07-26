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
  const [{user}, dispatch]=useStateValue();
  //useEffect 
  //Piece of code which runs based on given condition
  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged((authUser) =>{
      if(authUser){
        //use logged in

        dispatch({
          type:"SET_USER",
          user:authUser
        })
      } else{
        //user logged out
        dispatch({
          type:"SET_USER",
          user:null,
        })
      }
    });

    return () =>{
      //any cleanup operations go here...
      unsubscribe();
    }
  },[])

  console.log("User is", user);
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
