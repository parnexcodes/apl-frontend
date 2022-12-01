import React from "react";
import Image from "next/image";
import MatchCard from "../components/MatchCard";
import Stripe from "../components/Stripe";
import Navbar from "../Components/Navbar";
import Heading from "../Components/Heading";
import Footer from "../components/Footer";

export async function getServerSideProps(context) {
  const req = await fetch(`https://apl-backend.vercel.app/api/completed-matches`)
  const res = await req.json()
  if (res) {
    return {
      props: { data: res.result }, // will be passed to the page component as props
    }
  }
}

function schedule(props) {

  return (
    <>
      <div className="min-h-screen bg-gray-900">
        <Stripe />
        <Navbar />
        <div className="pt-28">
          <Heading mainHeading="APL" subHeading="Matches" />
        </div>
        <div className="flex gap-2 justify-around flex-wrap">
        <MatchCard data={props.data}/>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default schedule;
