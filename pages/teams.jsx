import React from "react";

import Stripe from "../components/Stripe";
import Navbar from "../Components/Navbar";
import Heading from "../Components/Heading";
import Footer from "../Components/Footer";
import TeamSection from "../Components/TeamSection";
function Gallery() {
  return (
    <>
      <div className="min-h-screen bg-gray-900">
        <Stripe />
        <Navbar />
        <div className="pt-28">
          <Heading mainHeading="APL" subHeading="Teams" />
        </div>
        <TeamSection />

        <Footer />
      </div>
    </>
  );
}

export default Gallery;
