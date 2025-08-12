import React from "react";

const blueColor = "rgba(60, 127, 215, 1)";

const accordionData = [
  {
    title: "Account Opening",
    icon: "fa-plus",
    items: [
      { title: "Resident individual", url: "https://support.zerodha.com/category/account-opening/resident-individual" },
      { title: "Minor", url: "https://support.zerodha.com/category/account-opening/minor" },
      { title: "Non Resident Indian (NRI)", url: "https://support.zerodha.com/category/account-opening/non-resident-indian-nri" },
      { title: "Company, Partnership, HUF and LLP", url: "https://support.zerodha.com/category/account-opening/company-partnership-huf-and-llp" },
      { title: "Glossary", url: "https://support.zerodha.com/category/account-opening/glossary" },
    ],
  },
  {
    title: "Your Zerodha Account",
    icon: "fa-user",
    items: [
      { title: "Your Profile", url: "https://support.zerodha.com/category/account-opening/your-profile" },
      { title: "Account modification", url: "https://support.zerodha.com/category/account-opening/account-modification" },
      { title: "Client Master Report (CMR) and Depository Participant (DP)", url: "https://support.zerodha.com/category/account-opening/client-master-report-cmr-and-depository-participant-dp" },
      { title: "Nomination", url: "https://support.zerodha.com/category/account-opening/nomination" },
      { title: "Transfer and conversion of securities", url: "https://support.zerodha.com/category/account-opening/transfer-and-conversion-of-securities" },
    ],
  },
  {
    title: "Kite",
    icon:"fa-solid fa-fire",
    items: [
      { title: "IPO", url: "https://support.zerodha.com/category/your-zerodha-account/ipo" },
      { title: "Trading FAQs", url: "https://support.zerodha.com/category/your-zerodha-account/trading-faqs" },
      { title: "Margin Trading Facility (MTF) and Margins", url: "https://support.zerodha.com/category/your-zerodha-account/margin-trading-facility-mtf-and-margins" },
      { title: "Charts and orders", url: "https://support.zerodha.com/category/your-zerodha-account/charts-and-orders" },
      { title: "Alerts and Nudges", url: "https://support.zerodha.com/category/your-zerodha-account/alerts-and-nudges" },
      { title: "General", url: "https://support.zerodha.com/category/your-zerodha-account/general" },
    ],
  },
  {
    title: "Funds",
    icon: "fa-rupee-sign",
    items: [
      { title: "Add money", url: "https://support.zerodha.com/category/kite/add-money" },
      { title: "Withdraw money", url: "https://support.zerodha.com/category/kite/withdraw-money" },
      { title: "Add bank accounts", url: "https://support.zerodha.com/category/kite/add-bank-accounts" },
      { title: "eMandates", url: "https://support.zerodha.com/category/kite/emandates" },
    ],
  },
  {
    title: "Console",
    icon: "fa-solid fa-bowling-ball",
    items: [
      { title: "Portfolio", url: "https://support.zerodha.com/category/funds/portfolio" },
      { title: "Corporate actions", url: "https://support.zerodha.com/category/funds/corporate-actions" },
      { title: "Funds statement", url: "https://support.zerodha.com/category/funds/funds-statement" },
      { title: "Reports", url: "https://support.zerodha.com/category/funds/reports" },
      { title: "Profile", url: "https://support.zerodha.com/category/funds/profile" },
      { title: "Segments", url: "https://support.zerodha.com/category/funds/segments" },
    ],
  },
  {
    title: "Coin",
    icon: "fa-solid fa-car-battery",
    items: [
      { title: "Mutual funds", url: "https://support.zerodha.com/category/console/mutual-funds" },
      { title: "National Pension Scheme (NPS)", url: "https://support.zerodha.com/category/console/national-pension-scheme-nps" },
      { title: "Fixed Deposit (FD)", url: "https://support.zerodha.com/category/console/fixed-deposit-fd" },
      { title: "Features on Coin", url: "https://support.zerodha.com/category/console/features-on-coin" },
      { title: "Payments and Orders", url: "https://support.zerodha.com/category/console/payments-and-orders" },
      { title: "General", url: "https://support.zerodha.com/category/console/general" },
    ],
  },
];

function CreateTicket() {
  return (
    <div className="container mt-4 mb-4">
      <div className="row">
      {/* Left Side - Accordion */}
<div className="col-8">
  <div className="accordion" id="supportAccordion">
    {accordionData.map((section, index) => (
      <div
        className="accordion-item custom-box mb-3"
        key={index}
        style={{
          borderRadius: "8px",
          overflow: "hidden",
          border: "1px solid #e9ecef",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <h2 className="accordion-header" id={`heading${index}`}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${index}`}
            aria-expanded="false"
            aria-controls={`collapse${index}`}
            style={{
              padding: "16px 20px",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              color: "#333",
              fontWeight: 400,
              backgroundColor: "white",
              border: "none",
              width: "100%",
              borderRadius: 0,
            }}
          >
            {/* Blue circular icon */}
            <span
              style={{
                backgroundColor: "#4285f4",
                color: "white",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                marginRight: "16px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              <i className={`fa ${section.icon}`} />
            </span>

            {/* Title text */}
            <span
              style={{
                color: "#333",
                fontWeight: 400,
                flexGrow: 1,
                textAlign: "left",
              }}
            >
              {section.title}
            </span>

          </button> 
        </h2>

        <div
          id={`collapse${index}`}
          className="accordion-collapse collapse"
          aria-labelledby={`heading${index}`}
          data-bs-parent="#supportAccordion"
        >
          <div className="accordion-body" style={{ padding: "20px" }}>
            <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
              {section.items.map(({ title, url }) => (
                <li
                  key={title}
                  style={{ position: "relative", lineHeight: 1.6, marginBottom: "12px" }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "#4285f4",
                      fontWeight: "bold",
                      fontSize: "14px",
                      lineHeight: 1,
                      top: "2px",
                    }}
                  >
                    •
                  </span>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginLeft: "20px",
                      color: "#4285f4",
                      textDecoration: "none",
                      lineHeight: 1.6,
                      display: "inline-block",
                      fontSize: "14px",
                    }}
                    onMouseOver={(e) => e.target.style.textDecoration = "underline"}
                    onMouseOut={(e) => e.target.style.textDecoration = "none"}
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* Right Side - Yellow box + Quick Links */}
        <div className="col-4 mb-5">
          {/* Yellow Box */}
          <div
            style={{
              backgroundColor: "#fff6e5",
               borderLeft: "5px solid #c48716ff",
              padding: "15px",
              marginBottom: "20px",
              borderRadius: "6px",
            }}
          >
            <p>
              <a style={{ color: blueColor }}>
                Exclusion of F&O contracts on 8 securities from August 29, 2025
              </a>
            </p>
            <p>
              <a style={{ color: blueColor }}>
                Revision in expiry day of Index and Stock derivatives contracts
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "6px",
              overflow: "hidden",
            }}
          >
             <div
    style={{
      backgroundColor: "#f8f9fa",
      padding: "10px 15px",
      fontWeight: "bold",
      color: "black",  // <-- black title color here
    }}
  >
    Quick links
  </div>
            {[
              "Track account opening",
              "Track segment activation",
              "Intraday margins",
              "Kite user manual",
            ].map((link, i) => (
              <div
                key={i}
                style={{
                  padding: "10px 15px",
                  borderTop: i !== 0 ? "1px solid #ddd" : "none",
                }}
              >
                <a style={{ color: blueColor }}>{`${i + 1}. ${link}`}</a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hover & Transition Effects */}
      <style>{`
        .custom-box {
          transition: transform 0.2s ease;
        }
        .custom-box:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}

export default CreateTicket;
