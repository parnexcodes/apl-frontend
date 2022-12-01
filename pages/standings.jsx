import React from "react";
import Stripe from "../components/Stripe";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import PointsTable from "../components/PointsTable";

export async function getServerSideProps(context) {
  const req = await fetch('https://apl-backend.vercel.app/api/tournament/standings')
  const res = await req.json()
  if (res) {
    return {
      props: { data: res.result.data }, // will be passed to the page component as props
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
          <Heading mainHeading="APL" subHeading="Standings" />
        </div>
        <PointsTable data={props.data} />
        <Footer />
      </div>
    </>
  );
}

export default schedule;
