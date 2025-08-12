import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5" style={{ marginTop: "100px" }}>
      <div className="text-center mt-5 p-3">
        <h1 className="mt-5" style={{ fontWeight: "400" }}>
          Zerodha Products
        </h1>
        <h3 className="text-gray-500 mt-3"style={{ fontWeight: "200" }}>
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="text-gray-500 mt-2">
          Check out our&nbsp;
          <a href="#" className="text-blue-500 hover:underline text-decoration-none">
            investment offerings{" "}
            <i className="fas fa-arrow-right fa-sm ms-1"></i>
          </a>
        </p>
      </div>
      <div className="mb-5"></div>
    </div>
  );
}

export default Hero;
