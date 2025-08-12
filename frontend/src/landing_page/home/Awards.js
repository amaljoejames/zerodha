import React from 'react';
function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='assets/largestBroker.svg'alt='ss'/>
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1 className='mt-5'>Largest stock broker in India</h1>
                    <p className='mb-4 mt-4'> 2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in :</p>
                    <div className='row '>
                        <div className='col-6 mt-3'>
                            <ul>
                                <li>
                                    Futures and Options
                                </li>
                                <li>
                                    Commodity derivatives
                                </li>
                                <li>
                                    Currency derivatives
                                </li>
                            </ul>
                        </div>
                        <div className='col-6 mt-3'>
                             <ul>
                                <li>
                                    Stocks & IPOs
                                </li>
                                <li>
                                    Direct mutual funds
                                </li>
                                <li>
                                    Bonds and Govt. Securities
                                </li>
                            </ul>
                        </div>
                        <img src="/assets/pressLogos.png"alt="press logos"style={{ width: '90%', marginTop: '15px' }}/>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Awards;