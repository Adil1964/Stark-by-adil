import React from "react";
import MyNavbar from "./Home/Navbar";
import HeroSection from "./Home/HeroSection";
import DashboardImage from "./Home/image";
import LogoMarquee from "./Home/Logos";
import EndToEndSection from "./Home/EndToEndSection";
import AccessibilitySection from "./Home/Accessibility-Section";
import AwardSection from "./Home/Award";
import WhyStark from "./Home/Why-Stark";
import ScaleSection from "./Home/ScaleSection";
import Footer from "./Home/Footer";
function Home() {
  return (
    <>
      <MyNavbar />
      <HeroSection />
      <DashboardImage />
      <LogoMarquee />
      <EndToEndSection />
      <AccessibilitySection />
      <AwardSection />
      <WhyStark />
      <ScaleSection />
      <Footer />
      {/* Other components */}
    </>
  );
}

export default Home;
