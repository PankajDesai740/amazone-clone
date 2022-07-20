import React from 'react'
import home from './img/home.jpg'
import './Home.css';
import Product from './Product';
import bk1 from './img/bk1.jpg';
import bk2 from './img/bk2.jpg';
import bk3 from './img/bk3.jpg';
import bk4 from './img/bk4.jpg';
import bk5 from './img/bk5.jpg';
import bk6 from './img/bk6.jpg';

function Home() {
    return (
        <div className='home'>
            <img className='home__img' src={home} alt="" />

            {/* Product  id ,title ,  price,, rating image */}

            <div className="home__row">
                <Product
                    id="101"
                    title="Best suited for those readers who are interested in the vivid stories of 
        Indian mythology, Mrityunjaya is an epic book. paassive..."
                    price={12}
                    rating={5}
                    image={bk1}
                />
                <Product
                    id="102"
                    title="
        pTron Bassbuds Jade Gaming True Wireless Headphone with 40Hrs Total Playtime .
         Deep Bass, BT5.0, Touch Control, Dual Mic"
                    price={20}
                    rating={4}
                    image={bk2}
                />
            </div>
            <div className="home__row">
                <Product
                    id="103"
                    title="
        vivo iQOO Z6 5G | Snapdragon 695-6nm| 120Hz FHD+ Display | 5000mAh Battery"
                    price={25}
                    rating={5}
                    image={bk3}
                />
                <Product
                    id="104"
                    title="Mi Smart Band 5 , Fitness Band, Color Display, 2 Weeks Battery Life"
                    price={15}
                    rating={5}
                    image={bk4}

                />
                <Product
                    id="105"
                    title="Pigeon Electric Kettle with Stainless Steel Body,
         instant noodles, soup etc. 1500 Watt (Silver)"
                    price={5}
                    rating={3}
                    image={bk5}

                />
            </div>
            <div className="home__row">
                <Product
                    id="106"
                    title="
        HP Pavilion 14 12th Gen Intel Core i5 16GB SDRAM/512GB SSD 14 inch(35.6cm) FHD,IPS,Micro-Edge Display
        /Intel UHD Graphics/B&O/Win 11/Alexa..."
                    price={200}
                    rating={5}
                    image={bk6}
                />
            </div>

            {/* Product  */}
        </div>
    )
}

export default Home