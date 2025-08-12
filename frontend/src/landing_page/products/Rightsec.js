import React from 'react';

function RightSec({ imageUrl, productName, prodDes, learnMore }) {
  return (
    <div className="container p-5 mt-5">
      <div className="row align-items-center">
        {/* Left side: Text */}
        <div className="col-6" style={{ paddingLeft: "100px" }}>
          <h1>{productName}</h1>
          <p>{prodDes}</p>
          <div className="mt-3">
            <a href={learnMore} className="text-decoration-none">
              Learn More <i className="fas fa-external-link-alt fa-sm ms-1"></i>
            </a>
          </div>
        </div>

        {/* Right side: Image */}
        <div className="col-6 text-end "style={{ paddingLeft: "100px" }}>
          <img src={imageUrl} alt={productName} style={{ maxWidth: "100%", height: "auto" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSec;

