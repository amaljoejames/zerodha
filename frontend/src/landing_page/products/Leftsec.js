import React from 'react';
function Leftsec({imageUrl,productName, prodDes, tryDemo, learnMore,googlePlay,appStore}) {

    return ( <div className="container p-5">
        <div className="row">
            <div className="col-6">
             <img src={imageUrl} alt="image" />
            </div>
            <div className="col-6 p-5 mt-5" >
                <div style={{marginLeft:"100px"}}>
                <h1 >{productName}</h1>
                <p>{prodDes}</p>
                <div className="mt-3">
                <a href={tryDemo} className='text-decoration-none'>Try Demo <i className="fas fa-external-link-alt fa-sm ms-1"></i></a>
                <a href={learnMore} className='text-decoration-none' style={{marginLeft:"50px"}}>Learn More <i className="fas fa-external-link-alt fa-sm ms-1"></i></a>
                </div>
                <div className=" mt-3">
                <a href={googlePlay} ><img src="./assets/googlePlayBadge.svg"/></a>
                <a href={appStore} style={{marginLeft:"50px"}} ><img src="./assets/appStoreBadge.svg"/></a>
                </div>
                </div>
            </div>

        </div>
    </div>

     );
}

export default Leftsec;