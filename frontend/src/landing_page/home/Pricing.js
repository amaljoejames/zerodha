import React from 'react';
function Pricing() {
  return (
    <div className="container py-5 mt-5">
      <div className="row align-items-center justify-content-between">

        {/* Left Content */}
        <div className="col-12 col-md-5 mb-4 mb-md-0">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of affordable pricing for all. Our pricing is simple and transparent. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-decoration-none " style={{margin:"0 auto"}}>
            See Pricing <i className="fas fa-external-link-alt fa-sm ms-1"></i>
          </a>
        </div>

        {/* Right Pricing Boxes */}
        <div className="col-12 col-md-6">
          <div className="row text-center">
            <div className="col-6 p-3 border">
              <h1 className="mb-2">₹0</h1>
              <p className="mb-0">Free equity delivery <br />and direct mutual funds</p>
            </div>
            <div className="col-6 p-3 border">
              <h1 className="mb-2">₹20</h1>
              <p className="mb-0">Intraday and F&amp;O</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;
