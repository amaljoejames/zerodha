import React from "react";
import OpenAccount from '../OpenAccount';
function BrokerAge() {
  return (
    <><div className="container p-5 border-top border-bottom ">
<div>
  {/* Tabs */}
  <ul className="nav nav-tabs" id="pricingTabs" role="tablist">
    <li className="nav-item" role="presentation">
      <button
        className="nav-link active"
        id="equity-tab"
        data-bs-toggle="tab"
        data-bs-target="#equity"
        type="button"
        role="tab"
        aria-controls="equity"
        aria-selected="true"
      >
        Equity
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="currency-tab"
        data-bs-toggle="tab"
        data-bs-target="#currency"
        type="button"
        role="tab"
        aria-controls="currency"
        aria-selected="false"
      >
        Currency
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="commodity-tab"
        data-bs-toggle="tab"
        data-bs-target="#commodity"
        type="button"
        role="tab"
        aria-controls="commodity"
        aria-selected="false"
      >
        Commodity
      </button>
    </li>
  </ul>

  {/* Tab Content */}
  <div className="tab-content mt-3" id="pricingTabsContent">
    {/* Equity Table */}
    <div
      className="tab-pane fade show active"
      id="equity"
      role="tabpanel"
      aria-labelledby="equity-tab"
    >
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="border-b border-gray-300 bg-gray-100">
            <th className="text-left py-4 px-4 font-medium text-gray-700"></th>
            <th className="text-left py-4 px-4 font-medium text-gray-700">
              Equity delivery
            </th>
            <th className="text-left py-4 px-4 font-medium text-gray-700">
              Equity intraday
            </th>
            <th className="text-left py-4 px-4 font-medium text-gray-700">
              F&O - Futures
            </th>
            <th className="text-left py-4 px-4 font-medium text-gray-700">
              F&O - Options
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="py-4 px-4 font-medium text-gray-700">Brokerage</td>
            <td className="py-4 px-4 text-gray-600">Zero Brokerage</td>
            <td className="py-4 px-4 text-gray-600">
              0.03% or Rs. 20/executed order whichever is lower
            </td>
            <td className="py-4 px-4 text-gray-600">
              0.03% or Rs. 20/executed order whichever is lower
            </td>
            <td className="py-4 px-4 text-gray-600">Flat Rs. 20 per executed order</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-4 px-4 font-medium text-gray-700">STT/CTT</td>
            <td className="py-4 px-4 text-gray-600">0.1% on buy & sell</td>
            <td className="py-4 px-4 text-gray-600">0.025% on the sell side</td>
            <td className="py-4 px-4 text-gray-600">0.02% on the sell side</td>
            <td className="py-4 px-4 text-gray-600">
              <div>• 0.125% of the intrinsic value on options that are bought and exercised</div>
              <div>• 0.1% on sell side (on premium)</div>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-4 px-4 font-medium text-gray-700">Transaction charges</td>
            <td className="py-4 px-4 text-gray-600">
              <div>NSE: 0.00297%</div>
              <div>BSE: 0.00375%</div>
            </td>
            <td className="py-4 px-4 text-gray-600">
              <div>NSE: 0.00297%</div>
              <div>BSE: 0.00375%</div>
            </td>
            <td className="py-4 px-4 text-gray-600">
              <div>NSE: 0.00173%</div>
              <div>BSE: 0</div>
            </td>
            <td className="py-4 px-4 text-gray-600">
              <div>NSE: 0.03503% (on premium)</div>
              <div>BSE: 0.0325% (on premium)</div>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-4 px-4 font-medium text-gray-700" colSpan={1}>
              GST
            </td>
            <td className="py-4 px-4 text-gray-600" colSpan={4}>
              18% on (brokerage + SEBI charges + transaction charges)
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-4 px-4 font-medium text-gray-700" colSpan={1}>
              SEBI charges
            </td>
            <td className="py-4 px-4 text-gray-600" colSpan={4}>
              ₹10 / crore
            </td>
          </tr>
          <tr>
            <td className="py-4 px-4 font-medium text-gray-700">Stamp charges</td>
            <td className="py-4 px-4 text-gray-600">0.015% or ₹1500 / crore on buy side</td>
            <td className="py-4 px-4 text-gray-600">0.003% or ₹300 / crore on buy side</td>
            <td className="py-4 px-4 text-gray-600">0.002% or ₹200 / crore on buy side</td>
            <td className="py-4 px-4 text-gray-600">0.003% or ₹300 / crore on buy side</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Currency Table */}
    <div
      className="tab-pane fade"
      id="currency"
      role="tabpanel"
      aria-labelledby="currency-tab"
    >
      <table className="w-full border-collapse border border-gray-300 mt-3">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-300">
            <th className="py-4 px-4"></th>
            <th className="py-4 px-4 font-medium text-gray-700">Currency futures</th>
            <th className="py-4 px-4 font-medium text-gray-700">Currency options</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="py-4 px-4 font-medium text-gray-700">Brokerage</td>
            <td className="py-4 px-4 text-gray-600">
              0.03% or ₹ 20/executed order whichever is lower
            </td>
            <td className="py-4 px-4 text-gray-600">₹ 20/executed order</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-4 px-4 font-medium text-gray-700">STT/CTT</td>
            <td className="py-4 px-4 text-gray-600">No STT</td>
            <td className="py-4 px-4 text-gray-600">No STT</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-4 px-4 font-medium text-gray-700">Transaction charges</td>
            <td className="py-4 px-4 text-gray-600">
              NSE: 0.00035% <br /> BSE: 0.00045%
            </td>
            <td className="py-4 px-4 text-gray-600">
              NSE: 0.0311% <br /> BSE: 0.001%
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-4 px-4 font-medium text-gray-700">GST</td>
            <td className="py-4 px-4 text-gray-600" colSpan={2}>
              18% on (brokerage + SEBI charges + transaction charges)
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-4 px-4 font-medium text-gray-700">SEBI charges</td>
            <td className="py-4 px-4 text-gray-600" colSpan={2}>
              ₹ 10 / crore
            </td>
          </tr>
          <tr>
            <td className="py-4 px-4 font-medium text-gray-700">Stamp charges</td>
            <td className="py-4 px-4 text-gray-600">0.0001% or ₹ 10 / crore on buy side</td>
            <td className="py-4 px-4 text-gray-600">0.0001% or ₹ 10 / crore on buy side</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Commodity Table */}
    <div
      className="tab-pane fade"
      id="commodity"
      role="tabpanel"
      aria-labelledby="commodity-tab"
      style={{justifyContent:"center",}}
    >
      <table className="w-full border-collapse border border-gray-300 mt-3">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-300">
            <th className="py-4 px-4"></th>
            <th className="py-4 px-4 font-medium text-gray-700">Commodity futures</th>
            <th className="py-4 px-4 font-medium text-gray-700">Commodity options</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="py-4 px-4 font-medium text-gray-700">Brokerage</td>
            <td className="py-4 px-4 text-gray-600">
              0.03% or ₹ 20/executed order whichever is lower
            </td>
            <td className="py-4 px-4 text-gray-600">₹ 20/executed order</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-4 px-4 font-medium text-gray-700">STT/CTT</td>
            <td className="py-4 px-4 text-gray-600">0.01% on sell side (Non-Agri)</td>
            <td className="py-4 px-4 text-gray-600">0.05% on sell side</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-4 px-4 font-medium text-gray-700">Transaction charges</td>
            <td className="py-4 px-4 text-gray-600">
              MCX: 0.0021% <br /> NSE: 0.0001%
            </td>
            <td className="py-4 px-4 text-gray-600">
              MCX: 0.0418% <br /> NSE: 0.001%
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-4 px-4 font-medium text-gray-700">GST</td>
            <td className="py-4 px-4 text-gray-600" colSpan={2}>
              18% on (brokerage + SEBI charges + transaction charges)
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-4 px-4 font-medium text-gray-700">SEBI charges</td>
            <td className="py-4 px-4 text-gray-600">
              Agri: ₹ 1 / crore <br /> Non-agri: ₹ 10 / crore
            </td>
            <td className="py-4 px-4 text-gray-600">₹ 10 / crore</td>
          </tr>
          <tr>
            <td className="py-4 px-4 font-medium text-gray-700">Stamp charges</td>
            <td className="py-4 px-4 text-gray-600">0.002% or ₹ 200 / crore on buy side</td>
            <td className="py-4 px-4 text-gray-600">0.003% or ₹ 300 / crore on buy side</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>






      </div>
      <OpenAccount/>
      <div className="container border-top">
  <p className="text-center mt-5 mb-5" style={{ fontSize: "25px" }}>
    Calculate your costs upfront{' '}
    <a
      href="https://zerodha.com/brokerage-calculator#tab-equities"
      target="_blank"
      rel="noopener noreferrer"
      className="text-decoration-none"
    >
      using our brokerage calculator
    </a>
  </p>

  <h2 className="mt-5 mb-5 ">Charges explained</h2>

  <div className="row">
    <div className="col-6">
      <p style={{ fontSize: "18px", fontWeight: "600" }}>
        Securities/Commodities transaction tax
      </p>
      <p className="text-muted" style={{ fontSize: "14px" }}>
        Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&amp;O.
      </p>

      <p style={{ fontSize: "18px", fontWeight: "600" }}>
        Transaction/Turnover Charges
      </p>
      <p className="text-muted" style={{ fontSize: "14px" }}>
        Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.
      </p>
      <ul className="text-muted" style={{ fontSize: "14px" }}>
        <li>
          BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups merged into group X w.e.f 01.12.2017)
        </li>
        <li>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</li>
        <li>
          BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.
        </li>
        <li>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</li>
      </ul>

      <p style={{ fontSize: "18px", fontWeight: "600" }}>
        Call &amp; trade
      </p>
      <p className="text-muted" style={{ fontSize: "14px" }}>
        Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.
      </p>

      <p style={{ fontSize: "18px", fontWeight: "600" }}>
        Stamp charges
      </p>
      <p className="text-muted" style={{ fontSize: "14px" }}>
        Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.
      </p>

      <p style={{ fontSize: "18px", fontWeight: "600" }}>
        NRI brokerage charges
      </p>
      <ul className="text-muted" style={{ fontSize: "14px" }}>
        <li>₹100 per order for futures and options.</li>
        <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
        <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
        <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
      </ul>

      <p style={{ fontSize: "18px", fontWeight: "600" }}>
        Account with debit balance
      </p>
      <p className="text-muted" style={{ fontSize: "14px" }}>
        If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
      </p>
      <p style={{ fontSize: "18px", fontWeight: "600" }}>
        Charges for Investor's Protection Fund Trust (IPFT) by NSE
      </p>
      <ul className="text-muted" style={{ fontSize: "14px" }}>
        <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
        <li>Options - ₹50 per crore + GST traded value (premium value).</li>
        <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
      </ul>

      <p style={{ fontSize: "18px", fontWeight: "600" }}>
        Margin Trading Facility (MTF)
      </p>
      <ul className="text-muted" style={{ fontSize: "14px" }}>
        <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. Interest applied from T+1 day until stocks are sold.</li>
        <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
        <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
      </ul>
    </div>

    <div className="col-6">

      <p style={{ fontSize: "18px", fontWeight: "600" }}>
        GST
      </p>
      <p className="text-muted" style={{ fontSize: "14px" }}>
        Tax levied by the government on the services rendered. 18% of (brokerage + SEBI charges + transaction charges)
      </p>

      <p style={{ fontSize: "18px", fontWeight: "600" }}>
        SEBI Charges
      </p>
      <p className="text-muted" style={{ fontSize: "14px" }}>
        Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.
      </p>

      <p style={{ fontSize: "18px", fontWeight: "600" }}>
        DP (Depository participant) charges
      </p>
      <p className="text-muted" style={{ fontSize: "14px" }}>
        ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.<br />
        Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.<br />
        Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.
      </p>

      <p style={{ fontSize: "18px", fontWeight: "600" }}>
        Pledging charges
      </p>
      <p className="text-muted" style={{ fontSize: "14px" }}>
        ₹30 + GST per pledge request per ISIN.
      </p>

      <p style={{ fontSize: "18px", fontWeight: "600" }}>
        AMC (Account maintenance charges)
      </p>
      <p className="text-muted" style={{ fontSize: "14px" }}>
        For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, <a href="https://zerodha.com/charges" className="text-decoration-none">Click here</a>.<br />
        For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, <a href="https://zerodha.com/charges" className="text-decoration-none">Click here</a>.
      </p>

      <p style={{ fontSize: "18px", fontWeight: "600" }}>
        Corporate action order charges
      </p>
      <p className="text-muted" style={{ fontSize: "14px" }}>
        ₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.
      </p>

      <p style={{ fontSize: "18px", fontWeight: "600" }}>
        Off-market transfer charges
      </p>
      <p className="text-muted" style={{ fontSize: "14px" }}>
        ₹25 per transaction.
      </p>

      <p style={{ fontSize: "18px", fontWeight: "600" }}>
        Physical CMR request
      </p>
      <p className="text-muted" style={{ fontSize: "14px" }}>
        First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.
      </p>

      <p style={{ fontSize: "18px", fontWeight: "600" }}>
        Payment gateway charges
      </p>
      <p className="text-muted" style={{ fontSize: "14px" }}>
        ₹9 + GST (Not levied on transfers done via UPI)
      </p>

      <p style={{ fontSize: "18px", fontWeight: "600" }}>
        Delayed Payment Charges
      </p>
      <p className="text-muted" style={{ fontSize: "14px" }}>
        Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. Learn more.
      </p>

      <p style={{ fontSize: "18px", fontWeight: "600" }}>
        Trading using 3-in-1 account with block functionality
      </p>
      <ul className="text-muted" style={{ fontSize: "14px" }}>
        <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
        <li>Intraday Brokerage: 0.05% per executed order.</li>
      </ul>
    </div>
  </div>
  <div className="mt-5 mb-5">
    <p className="text-muted" style={{ fontSize: "20x" }}>
  Disclaimer<br /><br />
  For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.
</p>

  </div>
</div>



</>
   
  );
}

export default BrokerAge;
