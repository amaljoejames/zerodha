import React from 'react';
    import { Link } from "react-router-dom";
function Hero() {
    return ( 
        <div className='container p-5 mb-5 '>
            <div className='row text-center'>
                <img src='./assets/homeHero.png' alt="Hero" className='mb-5'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives and more</p>
               <Link to="/signup" style={{ width: "30%", margin: "0 auto" }}>
  <button className="p-2 btn btn-primary fs-5 mb-5">
    Signup Now
  </button>
</Link>

            </div>

        </div>
     );
}

export default Hero;