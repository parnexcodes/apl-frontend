import React from "react";

import Stripe from "../components/Stripe";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import TeamSection from "../components/TeamSection";
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
