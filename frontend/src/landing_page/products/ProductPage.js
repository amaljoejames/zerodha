import React from 'react';
import Hero from './Hero';
import Leftsec from './Leftsec';
import RightSec from './Rightsec';
import Universe from './Universe';
function ProductPage() {
    return ( 
        <>
        <Hero/>
        <Leftsec 
  imageUrl="./assets/kite.png"
  productName="Kite"
  prodDes="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
  tryDemo="https://kite-demo.zerodha.com/dashboard"
  learnMore="https://zerodha.com/products/kite"
  googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3&pli=1"
  appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
/>

<RightSec
  imageUrl="./assets/console.png"
  productName="Console"
  prodDes="Console is Zerodha’s reporting dashboard to keep a track of all your investments and tax reports at one place."
  learnMore="https://console.zerodha.com/"
/>

        <Leftsec 
  imageUrl="./assets/coin.png"
  productName="Coin"
  prodDes="Buy and sell mutual funds seamlessly with Zerodha Coin. No commission, zero paperwork, and direct mutual funds on the app."
  tryDemo="https://coin.zerodha.com/"
  learnMore="https://zerodha.com/products/coin"
  googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.coin&pli=1"
  appStore="https://apps.apple.com/in/app/zerodha-coin-mutual-funds/id1336435294"
/>

<RightSec
  imageUrl="./assets/kiteconnect.png"
  productName="Kite Connect API"
  prodDes="Kite Connect API allows you to build your own trading platforms, algo strategies, and integrate with Zerodha’s ecosystem."
  learnMore="https://kite.trade/docs/connect/v3/"
/>

<Leftsec 
  imageUrl="./assets/varsity.png"
  productName="Varsity"
  prodDes="Zerodha Varsity is a comprehensive, free, and easy to understand equity trading module for beginners."
  tryDemo="https://zerodha.com/varsity/"
  learnMore="https://zerodha.com/varsity/"
  googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.varsity&pli=1"
  appStore="https://apps.apple.com/in/app/zerodha-varsity/id1250867556"
/>
<Universe/>
        </>
    );
    
}

export default ProductPage;