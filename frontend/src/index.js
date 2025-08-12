import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './landing_page/home/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';  // <-- import this
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import SignUp from './landing_page/signup/SignUp';
import Login from './landing_page/signup/Login';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductPage';
import PricingPage from  './landing_page/pricing/PricingPage';
import SupportPage from  './landing_page/support/SupportPage';
import NotFound from './landing_page/NotFound';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>   {/* <-- Wrap your app here */}
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </CookiesProvider>
);
