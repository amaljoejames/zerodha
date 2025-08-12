import React from 'react';


function Team() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-3 mb-5 border-top'>
                <h1 className='mt-3 fs-2 text-center' style={{color:"#3a3a3aff"}}> 
                    People
                </h1>
            </div>
           <div className='row p-5 mt-5 'style={{lineHeight:"1"}}>
<div className="col-6 ml-5 p-4 flex flex-col items-center text-center">
  {/* Image */}
  <img
    src="./assets/nithinKamath.jpg"
    alt="hero"
    className="rounded-full object-cover mb-4"
    style={{ borderRadius:"50%",width:"50%" }}
  />

  {/* Name */}
  <h4 className="mb-2 text-lg font-semibold">Nithin Kamath</h4>

  {/* Title */}
  <p className="text-gray-700" style={{ fontSize: '0.95rem' }}>
    Founder, CEO
  </p>
</div>


  <div className='col-6'>

   <p className='mt-5' style={{ fontSize: '0.95rem', color: '#181717ff' }}>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

<p className='mt-5' style={{ fontSize: '0.95rem', color: '#161616ff' }}>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

<p className='mt-5' style={{ fontSize: '0.95rem', color: '#171717ff' }}>Playing basketball is his zen.</p>

    <p style={{ fontSize: '0.9rem', lineHeight: '1.4', color: '#1c1b1bff' }}>
  Connect on : &nbsp;
   <a href='https://nithinkamath.me/' className='text-decoration-none my-2'>Homepage</a> / 
  <a href='https://tradingqna.com/u/nithin/summary' className='text-decoration-none '>&nbsp;TradingQnA</a> / &nbsp;
  <a href='https://x.com/Nithin0dha' className='text-decoration-none '>Twitter</a>
</p>

  </div>
  
</div>

        </div>
        
    );
}

export default Team;