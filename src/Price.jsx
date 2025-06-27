import React from "react";
import MyNavbar from "./Home/Navbar";
import Footer from "./Home/Footer";
import PricingPlans from "./Pricing-folder/Pricingplans";
import ComparePlans from "./Pricing-folder/ComparePlans";
import Logo from "./Pricing-folder/Logo";
const Price = () => {
  return (
    <>
      <MyNavbar />
      <PricingPlans />
      <ComparePlans />
      <Logo />
      <Footer />
    </>
  );
};

export default Price;
