import React from "react";
import Stripe from "../components/Stripe";
import Navbar from "../Components/Navbar";
import Slider from "../components/Slider";
import Heading from "../Components/Heading";
import AplStats from "../Components/AplStats";
import TeamSlider from "../components/TeamSlider";
import Billboards from "../components/Billboards";
import VideoSection from "../Components/VideoSection";
import Sponsers from "../components/Sponsers";
import Footer from "../components/Footer";

function Index() {
  return (
    <>
      {/* <Test /> */}
      <div className="min-h-screen bg-gray-900">
      <>
      <Stripe />
      <Navbar />
      <Slider />
      <Heading mainHeading="APL" subHeading="Stats" />
      <AplStats />
      <div className="italic font-bold text-center text-5xl pt-16 -pb-8 text-white">
        Teams
      </div>
      {/* <Heading mainHeading="APL" subHeading="Teams" /> */}
      <TeamSlider />
      <Heading mainHeading="APL" subHeading="Billboards" />
      <Billboards />
      <Heading mainHeading="APL" subHeading="Highlights" />
      <VideoSection />
      <Sponsers />
      <Footer />
    </>
      </div>
    </>
  );
}

export default Index;
