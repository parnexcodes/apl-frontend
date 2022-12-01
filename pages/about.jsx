import React from "react";
import Stripe from "../components/Stripe";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
// import '../styles/heading.css'
function About() {
  return (
    <>
      <div className="min-h-screen bg-gray-900">
        <Stripe />
        <Navbar />
        <div className="pt-28">
          <Heading mainHeading="APL" subHeading="About" />
        </div>
        <div className="flex gap-2 justify-around flex-wrap">
          <div className="mx-6 ... my-6 ...">
            <div className="">
              <img
                className="float-left pr-4 ... mt-4 ... mb-2 ... h-64 ... w-90 ... object-cover transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ... "
                id="img_apl"
                src="banner.jpeg"
              />
              <p className="text-white text-lg">
                About APL The Arya Premiere League well known as apl, initiated
                by Arya college of engineering and IT is called for an
                innaugration today. For the amazing preparations and this great
                initiative we would like to convey our special thanks to Dr
                Akhil Pandey sir (Head of C.S & IT Dept). <br></br>
                <br></br>Arya Premiere league is a 15 day long Haul of some of
                the most enthusiastic and thrilling bucket matches, where 3
                girls' teams and 16 boys' teams of our college will compete for
                the prestigious trophy. APL is organized to inculcate the the
                spirit of sportsmanship and promote teamwork and physical
                fitness among the students of Arya College. The young aspiring
                teams will showcase their talents in the most popular sport that
                is of course cricket which will entice the audience and will
                take them on an adventure ride. The matches will be played in
                T10 format. APL's 1st season will begin from 26th November, 2022
                where there are more than 250 players playing, with light's
                shimmering over green grass carpets, Cameras rolling and live
                streaming of the match.
              </p>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-6xl font-bold italic text-white text-center pt-6 ... pr-6 ... pb-6 ... pl-6 ... transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">
                Organizers
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 flex md:space-x-4 ...  pt-6 ... pr-6 ... pb-6 ... pl-6 ... ">
              <div className="pt-6 ... pb-6 ... pr-6 ... pl-6 ...">
                <img
                  width={256}
                  height={256}
                  className="rounded-md sm:h-fill sm:w-fill shadow-lg shadow-gray-900/50 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                  src="chairman.png"
                />
                <p className="text-white pt-2">Er. Anurag Agarwal</p>
                <p className="text-white">Chairman, ACEIT</p>
              </div>
              <div className="pt-6 ... pb-6 ... pr-6 ... pl-6 ...">
                <img
                  width={256}
                  height={256}
                  className="rounded-md sm:h-fill sm:w-fill drop-shadow-xl shadow-lg shadow-gray-900/50 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                  src="akhil-sir.jpeg"
                />
                <p className="text-white pt-2">Prof. (Dr.) Akhil Pandey</p>
                <p className="text-white">Director, Training & Placement Head, Deptt. Of CS & IT</p>                
              </div>
              <div className="pt-6 ... pb-6 ... pr-6 ... pl-6 ...">
                <img
                  width={256}
                  height={256}                
                  className="sm:h-fill ... sm:w-fill ... shadow-lg shadow-gray-900/50 ... transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ..."
                  src="arun-arya-sir.jpeg"
                />
                <p className="text-white pt-2">Prof.(Dr.) Arun Arya</p>
                <p className="text-white">Principal, ACEIT</p>                 
              </div>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-6xl font-bold italic text-white text-center pt-6 ... pr-6 ... pb-6 ... pl-6 ... transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">
                Supported By
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 flex md:space-x-4 ...  pt-6 ... pr-6 ... pb-6 ... pl-6 ... ">
              <div className="pt-6 ... pb-6 ... pr-6 ... pl-6 ...">
                <img
                  width={512}
                  height={512}
                  className="rounded-md sm:h-fill sm:w-fill shadow-lg shadow-gray-900/50 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                  src="banner1.jpeg"
                />
                {/* <p className="text-white pt-2">Er. Anurag Agarwal</p>
                <p className="text-white">Chairman, ACEIT</p> */}
              </div>
              <div className="pt-6 ... pb-6 ... pr-6 ... pl-6 ...">
                <img
                  width={512}
                  height={512}
                  className="rounded-md sm:h-fill sm:w-fill drop-shadow-xl shadow-lg shadow-gray-900/50 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                  src="banner2.jpeg"
                />
                {/* <p className="text-white pt-2">Prof. (Dr.) Akhil Pandey</p>
                <p className="text-white">Director, Training & Placement Head, Deptt. Of CS & IT</p>                 */}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;
