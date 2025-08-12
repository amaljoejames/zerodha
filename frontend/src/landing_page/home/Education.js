import React from 'react';
function Education() {
   return (
    <div className="container py-5 mt-3">
      <div className="row align-items-center justify-content-between">
        <div className="col-12 col-md-6">
    <img src='./assets/education.svg'></img>
        </div>

      
        <div className="col-12 col-md-5 mb-4 mb-md-0">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p className='text-muted'>
            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
          </p>
          <a href="/product"className="text-decoration-none mt-5" style={{margin:"0 auto"}}>
            Varsity <i className="fas fa-external-link-alt fa-sm ms-1"></i>
          </a>
          <p className='text-muted mt-5'>
            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
          </p>
          <a href="/product" className="text-decoration-none mt-5" style={{margin:"0 auto"}}>
           Trading and Q&A<i className="fas fa-external-link-alt fa-sm ms-1"></i>
          </a>
        </div>

      </div>
    </div>
  );
}

export default  Education;