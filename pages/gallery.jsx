import React from "react";

import Stripe from "../components/Stripe";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
// import Billboards from '../components/Billboards'
import GalleryGrid from "../components/GalleryGrid";
function Gallery() {
  return (
    <>
      <div className="min-h-screen bg-gray-900">
        <Stripe />
        <Navbar />
        <div className="pt-28">
          <Heading mainHeading="APL" subHeading="Gallery" />
        </div>
        <GalleryGrid />
        <Footer />
      </div>
    </>
  );
}

export default Gallery;
