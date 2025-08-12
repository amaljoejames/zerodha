import React, { useState } from "react";

// CreateTicket component
const CreateTicket = ({ onClose }) => {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    console.log("Ticket submitted:", { subject, description });
    // Reload the page directly without popup
    window.location.reload();
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "8px", position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h3 style={{ margin: "0", color: "#333" }}>CreateTicket</h3>
        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            fontSize: "20px",
            color: "#666",
            cursor: "pointer",
            padding: "0",
            width: "30px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            transition: "all 0.2s"
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#e9ecef";
            e.target.style.color = "#000";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#666";
          }}
        >
          ×
        </button>
      </div>
      <div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Subject:</label>
          <input 
            type="text" 
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter ticket subject"
            style={{ 
              width: "100%", 
              padding: "8px", 
              border: "1px solid #ddd", 
              borderRadius: "4px" 
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Description:</label>
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your issue..."
            rows="4"
            style={{ 
              width: "100%", 
              padding: "8px", 
              border: "1px solid #ddd", 
              borderRadius: "4px",
              resize: "vertical"
            }}
          ></textarea>
        </div>
        <button 
          onClick={handleSubmit}
          style={{
            backgroundColor: "#3c7fd7",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Submit Ticket
        </button>
      </div>
    </div>
  );
};

export default function Hero() {
  const [showTickets, setShowTickets] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

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
      icon: "fa-solid fa-fire",
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

  const handleSearch = (query) => {
    setSearchQuery(query);
    
    if (query.length > 0) {
      const results = [];
      
      accordionData.forEach(section => {
        // Search in section title
        if (section.title.toLowerCase().includes(query.toLowerCase())) {
          results.push({
            type: 'section',
            title: section.title,
            icon: section.icon,
            category: section.title
          });
        }
        
        // Search in section items
        section.items.forEach(item => {
          if (item.title.toLowerCase().includes(query.toLowerCase())) {
            results.push({
              type: 'item',
              title: item.title,
              url: item.url,
              category: section.title,
              icon: section.icon
            });
          }
        });
      });
      
      setSearchResults(results);
      setShowResults(true); // Always show dropdown when searching
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const handleResultClick = (result) => {
    setShowTickets(true);
    setShowResults(false);
    setSearchQuery("");
  };

  return (
    <div style={{ backgroundColor: "rgba(236, 236, 236, 1)" }}>
      <div className="container mb-5 p-5">
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontWeight: "500", fontSize: "50px" }}>Support Portal</h1>
          <button
            className="btn btn-primary"
            style={{
              backgroundColor: "rgba(60, 127, 215, 1)",
              border: "none",
              padding: "10px 20px",
            }}
            onClick={() => setShowTickets(!showTickets)}
          >
            Create New Ticket
          </button>
        </div>

        {/* Search bar */}
        <div style={{ position: "relative", width: "100%", marginTop: "50px" }}>
          <i
            className="fa-solid fa-magnifying-glass"
            style={{
              position: "absolute",
              left: "15px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#888",
              fontSize: "16px"
            }}
          />
          <input
            type="text"
            placeholder="How do I open my account, How do I activate F&O..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 50px 12px 45px", // Added right padding for button
              border: "1px solid #ddd",
              borderRadius: "6px",
              fontSize: "14px",
              outline: "none",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}
          />
          
          {/* Search Button */}
          <button
            onClick={() => {
              if (searchQuery.trim()) {
                handleSearch(searchQuery);
              }
            }}
            style={{
              position: "absolute",
              right: "8px",
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "#3c7fd7",
              color: "white",
              border: "none",
              borderRadius: "4px",
              padding: "6px 12px",
              cursor: "pointer",
              fontSize: "12px"
            }}
          >
            Search
          </button>
          
          {/* Search Results Dropdown */}
          {showResults && searchResults.length > 0 && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: "0",
                right: "0",
                backgroundColor: "white",
                border: "1px solid #ddd",
                borderRadius: "6px",
                marginTop: "4px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                zIndex: 1000,
                maxHeight: "300px",
                overflowY: "auto"
              }}
            >
              {searchResults.map((result, index) => (
                <div
                  key={index}
                  onClick={() => handleResultClick(result)}
                  style={{
                    padding: "12px 16px",
                    borderBottom: index < searchResults.length - 1 ? "1px solid #eee" : "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    transition: "background-color 0.2s"
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "#f8f9fa"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "white"}
                >
                  <i 
                    className={result.icon} 
                    style={{ 
                      marginRight: "12px", 
                      color: "#3c7fd7",
                      width: "16px" 
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: "500", fontSize: "14px" }}>
                      {result.title}
                    </div>
                    <div style={{ fontSize: "12px", color: "#666", marginTop: "2px" }}>
                      {result.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* No Results Found Message */}
          {showResults && searchResults.length === 0 && searchQuery.trim() !== "" && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: "0",
                right: "0",
                backgroundColor: "white",
                border: "1px solid #ddd",
                borderRadius: "6px",
                marginTop: "4px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                zIndex: 1000,
                padding: "20px",
                textAlign: "center",
                color: "#666"
              }}
            >
              <div style={{ fontSize: "16px", marginBottom: "8px" }}>😔</div>
              <div style={{ fontSize: "14px" }}>Sorry, no results found for "{searchQuery}"</div>
              <div style={{ fontSize: "12px", marginTop: "4px" }}>Try searching with different keywords</div>
            </div>
          )}
        </div>

        {/* Tickets panel */}
        {showTickets && (
          <div
            style={{
              minHeight: "400px",
              width: "100%",
              backgroundColor: "#ffffff",
              marginTop: "30px",
              padding: "0",
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
          >
            <CreateTicket onClose={() => setShowTickets(false)} />
          </div>
        )}
      </div>
    </div>
  );
}