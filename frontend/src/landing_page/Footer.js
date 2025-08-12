import React from 'react';

function Footer() {
    return (
      <footer>
        <div style={{ backgroundColor: "#ffffff", borderTop: "1px solid #ddd", marginTop: "20px" }}>

        <div className="container">
            <div className="row gy-4 mt-5"style={{ height: "250px" }}>
              <div className="col">
  {/* Logo */}
  <img src="./assets/logo.svg" style={{ width: "60%" }} alt="Logo" />

  {/* Footer Text */}
  <p className="mt-3 mb-2">
    © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
  </p>

  {/* Social Icons Row */}
  <div
    className="d-flex align-items-center mt-4"
    style={{
      gap: "16px",
      flexWrap: "nowrap",
      overflowX: "auto",
      minWidth: 0,
      marginTop: "10px",
    }}
  >
    {/* Group 1 */}
    <a
      href="https://x.com/zerodhaonline"
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted text-decoration-none"
    >
      <i className="fab fa-twitter fs-4"></i>
    </a>
    <a
      href="https://facebook.com/zerodhaonline"
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted text-decoration-none"
    >
      <i className="fab fa-facebook fs-4"></i>
    </a>
    <a
      href="https://instagram.com/zerodhaonline"
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted text-decoration-none"
    >
      <i className="fab fa-instagram fs-4"></i>
    </a>
    <a
      href="https://linkedin.com/company/zerodha"
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted text-decoration-none"
    >
      <i className="fab fa-linkedin fs-4"></i>
    </a>

    {/* Divider */}
    <div style={{ borderLeft: "1px solid #ccc", height: "16px" }}></div>
    
    {/* Group 2 */}
    <a
      href="https://youtube.com/zerodhaonline"
      target="_blank"
      rel="noopener noreferrer"
      className="d-block text-muted text-decoration-none"
    >
      <i className="fab fa-youtube fs-4"></i>
    </a>
    <a
      href="https://wa.me/918048000111"
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted text-decoration-none"
    >
      <i className="fab fa-whatsapp fs-4"></i>
    </a>
    <a
      href="https://t.me/zerodhaofficial"
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted text-decoration-none"
    >
      <i className="fab fa-telegram fs-4"></i>
    </a>
  </div>
</div>


                <div className="col" style={{ marginLeft: "100px" }}>
                    <p className="fw-bold">Account</p>
                    <a href="#" className="d-block text-muted text-decoration-none">Open demat account</a>
                    <a href="#" className="d-block text-muted text-decoration-none">Minor demat account</a>
                    <a href="#" className="d-block text-muted text-decoration-none">NRI demat account</a>
                    <a href="#" className="d-block text-muted text-decoration-none">Commodity</a>
                    <a href="#" className="d-block text-muted text-decoration-none">Dematerialisation</a>
                    <a href="#" className="d-block text-muted text-decoration-none">Fund transfer</a>
                    <a href="#" className="d-block text-muted text-decoration-none">MTF</a>
                    <a href="#" className="d-block text-muted text-decoration-none">Referral program</a>
                </div>

                <div className="col">
                    <p className="fw-bold">Support</p>
                    <a href="#" className="d-block text-muted text-decoration-none">Contact us</a>
                    <a href="#" className="d-block text-muted text-decoration-none">Support portal</a>
                    <a href="#" className="d-block text-muted text-decoration-none">How to file a complaint?</a>
                    <a href="#" className="d-block text-muted text-decoration-none">Status of your complaints</a>
                    <a href="#" className="d-block text-muted text-decoration-none">Bulletin</a>
                    <a href="#" className="d-block text-muted text-decoration-none">Circular</a>
                    <a href="#" className="d-block text-muted text-decoration-none">Z-Connect blog</a>
                    <a href="#" className="d-block text-muted text-decoration-none">Downloads</a>
                </div>

                <div className="col">
                    <p className="fw-bold">Company</p>
                    <a href="#" className="d-block text-muted text-decoration-none">About</a>
                    <a href="#" className="d-block text-muted text-decoration-none">Philosophy</a>
                    <a href="#" className="d-block text-muted text-decoration-none">Press & media</a>
                    <a href="#" className="d-block text-muted text-decoration-none">Careers</a>
                    <a href="#" className="d-block text-muted text-decoration-none">Zerodha Cares (CSR)</a>
                    <a href="#" className="d-block text-muted text-decoration-none">Zerodha.tech</a>
                    <a href="#" className="d-block text-muted text-decoration-none">Open source</a>
                </div>

                <div className="col">
                    <p className="fw-bold">Quick links</p>
                    <a href="#" className="d-block text-muted text-decoration-none">Upcoming IPOs</a>
                    <a href="#" className="d-block text-muted text-decoration-none">Brokerage charges</a>
                    <a href="#" className="d-block text-muted text-decoration-none">Market holidays</a>
                    <a href="#" className="d-block text-muted text-decoration-none">Economic calendar</a>
                    <a href="#" className="d-block text-muted text-decoration-none">Calculators</a>
                    <a href="#" className="d-block text-muted text-decoration-none">Markets</a>
                    <a href="#" className="d-block text-muted text-decoration-none">Sectors</a>
                </div>
            </div>
            <div className="container mt-5">
  <div className="row">
    <div className="col">
      <p className="text-muted " style={{fontSize:"14px"}}>
        Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
      </p>

       <p className="text-muted " style={{fontSize:"14px"}}>
        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
      </p>

      <p className="text-muted " style={{fontSize:"14px"}}>
        Investments in securities market are subject to market risks; read all the related documents carefully before investing.
      </p>

     <p className="text-muted " style={{fontSize:"14px"}}>
        Attention investors: 1. Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2. Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3. Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
      </p>

     <p className="text-muted " style={{fontSize:"14px"}}>
        India's largest broker based on networth as per NSE. <a href="#" className="text-muted text-decoration-none">NSE broker factsheet</a>
      </p>

       <p className="text-muted " style={{fontSize:"14px"}}>
        "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
      </p>
    </div>
  </div>
</div>
<div className="container mt-4 " style={{marginBottom:"50px"}}>
  <div className="row">
    <div className="col d-flex flex-wrap">
      <a
        href="#"
        className="text-muted text-decoration-none "
        style={{ padding: "8px 20px",marginLeft:"40px" }}
      >
        NSE
      </a>
      <a
        href="#"
        className="text-muted text-decoration-none"
        style={{ padding: "8px 20px" }}
      >
        BSE
      </a>
      <a
        href="#"
        className="text-muted text-decoration-none"
        style={{ padding: "8px 20px" }}
      >
        MCX
      </a>
      <a
        href="#"
        className="text-muted text-decoration-none"
        style={{ padding: "8px 20px" }}
      >
        Terms & conditions
      </a>
      <a
        href="#"
        className="text-muted text-decoration-none"
        style={{ padding: "8px 20px" }}
      >
        Policies & procedures
      </a>
      <a
        href="#"
        className="text-muted text-decoration-none"
        style={{ padding: "8px 20px" }}
      >
        Privacy policy
      </a>
      <a
        href="#"
        className="text-muted text-decoration-none"
        style={{ padding: "8px 20px" }}
      >
        Disclosure
      </a>
      <a
        href="#"
        className="text-muted text-decoration-none"
        style={{ padding: "8px 20px" }}
      >
        For investor's attention
      </a>
      <a
        href="#"
        className="text-muted text-decoration-none"
        style={{ padding: "8px 20px" }}
      >
        Investor charter
      </a>
    </div>
  </div>
</div>


       
       
       </div>

</div>
</footer>



    );
}

export default Footer;
