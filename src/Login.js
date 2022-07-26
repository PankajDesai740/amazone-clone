import React from 'react';
import logo1 from './img/logo1.png';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

import  {auth} from  './firebase';

import { useState } from 'react';

function Login() {
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("")

    const login = (event) => {
        event.preventDefault(); //refresh stops
        //login logic
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) =>{
            //loggedin , redirect to homepage..
            navigate('/');
        })
        .catch((e) => alert(e.message));

    };
    const register = (event) => {
        event.preventDefault(); //refresh stops
        //Register logic
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            //created a user and logged in ....
            navigate('/');
        })
        .catch((e) => alert(e.message));
    };

  return (
    <div className='login'>
        <Link to ="/">
            <img className='login__logo'
            src={logo1}
            alt="" 
            
        />
        </Link>
        <div className="login__container">
            <h1>Sign in</h1>
            <form>
                <h5>E-mail</h5>
                <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                <h5>Password</h5>
                <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                <button onClick={login} type="submit" className='login__button'>Sign In</button>

            </form>
            <p>By signing-n you agree to Amazon's Conditions
            of Use and Sale.Please See our privacy Notice.           
            </p>
            <button onClick={register} type="submit" className='login__register'>Create Your Amazon Account</button>
        </div>
       
        </div>
  )
}

export default Login