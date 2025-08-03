import React from 'react';
import ShopComp from '../src/components/ShopCom/ShopCom';
import Navbar from '../src/components/Navbar/Navbar';
import Footersec from '../src/components/Footersection/Footersection';



const ShopPage = () => {
  return (
    <div>
        <Navbar />
        <ShopComp />
        <Footersec/>

    </div>
  );
};

export default ShopPage;
