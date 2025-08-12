import React from 'react';
function Stats() {
   return (
    <div className="container p-5">
      <div className="row align-items-center">

        {/* Left Text Section */}
        <div className="col-12 col-md-6">
          <h1 className="fs-2 mb-5">Trust with Confidence</h1>

          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.
          </p>

          <h2 className="fs-4 mt-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-4 mt-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-4 mt-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="col-12 col-md-6 text-center">
          <img src="assets/ecosystem.png" alt="ecosystem" style={{ width: "70%" }} />
        <div className="mt-4 text-center">
  <a href="/product" className="me-4 text-decoration-none">
    Explore our products <i className="fas fa-arrow-right fa-sm ms-1"></i>
  </a>
  <a href="/product" className="text-decoration-none">
    Try Kite demo <i className="fas fa-external-link-alt fa-sm ms-1"></i>
  </a>
</div>


        </div>

      </div>
    </div>
  );
}
export default Stats;