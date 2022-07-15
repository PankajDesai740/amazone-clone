import React from 'react'
import home from './img/home.jpg'
import './Home.css';


function Home() {
    return (
        <div className='home'>
        <img className='home__img' src= {home} alt="" />
        </div>
    )
}

export default Home