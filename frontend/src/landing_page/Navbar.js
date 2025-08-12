import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const updateUser = () => {
      const username = localStorage.getItem("username");
      if (username) setUser({ username });
      else setUser(null);
    };

    // Listen for the custom event to update user info
    window.addEventListener("storageChanged", updateUser);

    // Run once on mount
    updateUser();

    return () => {
      window.removeEventListener("storageChanged", updateUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUser(null);
    // optionally clear other auth info or cookies here
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-0">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="./assets/logo.svg"
            alt="logo"
            style={{ width: "40%", paddingLeft: "100px" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            {!user ? (
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
            ) : (
              <li className="nav-item d-flex align-items-center px-3 gap-2">
                <i
                  className="fas fa-user"
                  style={{ fontSize: "1rem" }}
                  title="User"
                ></i>
                <div
                  style={{
                    
                    padding: "4px 10px",
                    borderRadius: "12px",
                    backgroundColor: "#ffffffff",
                
                    color: "#333",
                    whiteSpace: "nowrap",
                  }}
                >
                  {user.username}
                </div>
                <i
                  className="fas fa-sign-out-alt"
                  style={{
                    fontSize: "1.2rem",
                    color: "#dc3545",
                    cursor: "pointer",
                  }}
                  title="Logout"
                  onClick={handleLogout}
                ></i>
              </li>
            )}
           
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/support">
                Support
              </Link>
            </li>

            <li className="nav-item dropdown position-relative">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bars"></i>
              </a>

             <ul className="dropdown-menu mega-dropdown" data-bs-popper="static">
  <div className="px-4 py-3">
    {/* Row 1: Kite, Console, Kite Connect, Coin */}
    <div className="row gy-3 mb-4">
      {/* Kite */}
      <div className="col-md-3 d-flex align-items-start gap-2">
        <a href="https://kite.zerodha.com/" target="_blank" rel="noopener noreferrer">
          <img src="./assets/kite-logo.svg" alt="Kite" style={{ width: "40px" }} />
        </a>
        <div>
          <a className="dropdown-item fw-bold p-0 mb-0" href="https://kite.zerodha.com/" target="_blank" rel="noopener noreferrer">
            Kite
          </a>
          <div className="text-muted small">Trading platform</div>
        </div>
      </div>

      {/* Console */}
      <div className="col-md-3 d-flex align-items-start gap-2">
        <a href="https://console.zerodha.com/" target="_blank" rel="noopener noreferrer">
          <img src="./assets/console.svg" alt="Console" style={{ width: "40px" }} />
        </a>
        <div>
          <a className="dropdown-item fw-bold p-0 mb-0" href="https://console.zerodha.com/" target="_blank" rel="noopener noreferrer">
            Console
          </a>
          <div className="text-muted small">Back office platform</div>
        </div>
      </div>

      {/* Kite Connect */}
      <div className="col-md-3 d-flex align-items-start gap-2">
        <a href="https://zerodha.com/products/api/" target="_blank" rel="noopener noreferrer">
          <img src="./assets/kite-connect.svg" alt="Kite Connect" style={{ width: "40px" }} />
        </a>
        <div>
          <a className="dropdown-item fw-bold p-0 mb-0" href="https://zerodha.com/products/api/" target="_blank" rel="noopener noreferrer">
            Kite Connect
          </a>
          <div className="text-muted small">Trading APIs for developers</div>
        </div>
      </div>

      {/* Coin */}
      <div className="col-md-3 d-flex align-items-start gap-2">
        <a href="https://coin.zerodha.com/" target="_blank" rel="noopener noreferrer">
          <img src="./assets/coin.svg" alt="Coin" style={{ width: "40px" }} />
        </a>
        <div>
          <a className="dropdown-item fw-bold p-0 mb-0" href="https://coin.zerodha.com/" target="_blank" rel="noopener noreferrer">
            Coin
          </a>
          <div className="text-muted small">Mutual fund investment</div>
        </div>
      </div>
    </div>

    {/* Row 2: Utilities, Updates, Education */}
    <div className="row gy-3">
      {/* Utilities */}
      <div className="col-md-3">
        <h6 className="fw-bold mb-3">Utilities</h6>
        <ul className="list-unstyled">
          <li><a className="dropdown-item p-0 mb-1" href="https://zerodha.com/calculators/" target="_blank" rel="noopener noreferrer">Calculators</a></li>
          <li><a className="dropdown-item p-0 mb-1" href="https://zerodha.com/brokerage-calculator/#tab-equities" target="_blank" rel="noopener noreferrer">Brokerage calculator</a></li>
          <li><a className="dropdown-item p-0 mb-1" href="https://zerodha.com/margin-calculator/SPAN/" target="_blank" rel="noopener noreferrer">Margin calculator</a></li>
          <li><a className="dropdown-item p-0 mb-1" href="https://zerodha.com/calculators/sip-calculator/" target="_blank" rel="noopener noreferrer">SIP calculator</a></li>
        </ul>
      </div>

      {/* Updates */}
      <div className="col-md-3">
        <h6 className="fw-bold mb-3">Updates</h6>
        <ul className="list-unstyled">
          <li><a className="dropdown-item p-0 mb-1" href="https://zerodha.com/z-connect/" target="_blank" rel="noopener noreferrer">Z-Connect blog</a></li>
          <li><a className="dropdown-item p-0 mb-1" href="https://zerodha.com/marketintel/bulletin/" target="_blank" rel="noopener noreferrer">Circulars / Bulletin</a></li>
          <li><a className="dropdown-item p-0 mb-1" href="https://zerodha.com/ipo/" target="_blank" rel="noopener noreferrer">IPOs</a></li>
          <li><a className="dropdown-item p-0 mb-1" href="https://zerodha.com/markets/" target="_blank" rel="noopener noreferrer">Markets</a></li>
        </ul>
      </div>

      {/* Education */}
     <div className="col-md-3">

        <h6 className="fw-bold mb-3">Education</h6>
        <div className="d-flex flex-row align-items-center gap-5 mb-3">
          <div className="d-flex align-items-center gap-1 px-1">
            <a href="https://zerodha.com/varsity/" target="_blank" rel="noopener noreferrer">
              <img src="./assets/varsitylogo.png" alt="Varsity" style={{ width: "40px" }} />
            </a>
            <a className="dropdown-item p-0 mb-0" href="https://zerodha.com/varsity/" target="_blank" rel="noopener noreferrer">
              Varsity
            </a>
          </div>

          <div className="d-flex align-items-center gap-1 px-1">
            <a href="https://tradingqna.com/" target="_blank" rel="noopener noreferrer">
              <img src="./assets/tqna.png" alt="TradingQnA" style={{ width: "40px" }} />
            </a>
            <a className="dropdown-item p-0 mb-0" href="https://tradingqna.com/" target="_blank" rel="noopener noreferrer">
              TradingQnA
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</ul>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
