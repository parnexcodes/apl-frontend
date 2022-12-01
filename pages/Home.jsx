import React from "react";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import Stripe from "../components/Stripe";
import TeamSlider from "../Components/TeamSlider";
import Heading from "../Components/Heading";
import VideoSection from "../Components/VideoSection";
import Billboards from "../Components/Billboards";
import Footer from "../components/Footer";
import AplStats from "../Components/AplStats";
import Sponsers from "../components/Sponsers";

function Home() {
  return (
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
  );
}

export default Home;
