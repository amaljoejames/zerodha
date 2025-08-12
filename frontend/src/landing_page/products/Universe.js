import React from "react";
import { Link } from 'react-router-dom';
function Universe() {
  return (
    <div className="container mb-5" style={{ marginTop: "100px" }}>
      <div className="row text-center ">
        <h3 style={{ fontWeight: "300" }}>
          Want to know more about our technology stack? Check out the{" "}
          <a
            href="https://zerodha.tech/"
            style={{ textDecoration: "none", color: "blue", cursor: "pointer" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Zerodha.tech blog
          </a>
          .
        </h3>
        <div className="mb-5"></div>
        <div className="mb-5"></div>
        <h1 className="text-center">The Zerodha Universe</h1>
        <p className=" text-center mt-3" style={{ fontWeight: "300" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="mb-5"></div>
        <div className="mt-5 border-top"></div>

        <div className="col-4 p-3 mt-5">
  <a href="https://smallcase.zerodha.com/" style={{ textDecoration: "none", color: "inherit" }}>
    <img src="./assets/smallcaseLogo.png" className="mt-2" alt="smallcase" />
    <p className="text-small text-muted mt-4">
      Thematic investing platform that helps you invest in diversified
      baskets of stocks on ETFs.
    </p>
  </a>
</div>

<div className="col-4 p-3 mt-5">
  <a href="https://joinditto.in/" style={{ textDecoration: "none", color: "inherit" }}>
    <img src="./assets/dittoLogo.png" style={{ width: "35%" }} className="mt-2" alt="Ditto" />
    <p className="text-small text-muted mt-4">
      Personalized advice on life and health insurance. No spam and no
      mis-selling.
    </p>
  </a>
</div>

<div className="col-4 p-3 mt-5">
  <a href="https://www.zerodhafundhouse.com/" style={{ textDecoration: "none", color: "inherit" }}>
    <img src="./assets/zerodhaFundHouse.png" style={{ width: "47%" }} className="mt-2" alt="Zerodha Fund House" />
    <p className="text-small text-muted mt-4">
      Our asset management venture that is creating simple and transparent index
      funds to help you save for your goals.
    </p>
  </a>
</div>

<div className="col-4 p-3 mt-5">
  <a href="https://streak.tech/" style={{ textDecoration: "none", color: "inherit" }}>
    <img src="./assets/streakLogo.png" style={{ width: "50%" }} className="mt-2" alt="Streak" />
    <p className="text-small text-muted mt-4">
      Systematic trading platform that allows you to create and backtest
      strategies without coding.
    </p>
  </a>
</div>

<div className="col-4 p-3 mt-5">
  <a href="https://sensibull.com/" style={{ textDecoration: "none", color: "inherit" }}>
    <img src="./assets/sensibullLogo.svg" style={{ width: "95%" }} className="mt-2" alt="Sensibull" />
    <p className="text-small text-muted mt-4">
      Options trading platform that lets you create strategies, analyze positions, and examine
      data points like open interest, FII/DII, and more.
    </p>
  </a>
</div>

<div className="col-4 p-3 mt-5">
  <a href="https://www.tijorifinance.com/" style={{ textDecoration: "none", color: "inherit" }}>
    <img src="./assets/tijori.svg" style={{ width: "45%" }} className="mt-2" alt="Tijori" />
    <p className="text-small text-muted mt-4">
      Investment research platform that offers detailed insights on stocks,
      sectors, supply chains, and more.
    </p>
  </a>
</div>

        <div className="mb-5"></div>


<Link to="/signup" style={{ display: 'block', width: '20%', margin: '0 auto' }}>
  <button className="p-2 btn btn-primary fs-5 mb-5" style={{ width: '100%' }}>
    Signup Now
  </button>
</Link>


      </div>
      <div className="mb-5"></div>
       <div className="mb-5"></div>
        <div className="mb-5"></div>
       
    </div>
  );
}

export default Universe;
