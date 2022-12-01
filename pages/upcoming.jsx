import React from "react";
import Image from "next/image";
import MatchCard from "../components/MatchCard";
import Stripe from "../components/Stripe";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import Footer from "../components/Footer";

export async function getServerSideProps(context) {
  const req = await fetch(`https://apl-backend.vercel.app/api/upcoming-matches`)
  const res = await req.json()
  if (res) {
    return {
      props: { data: res.result }, // will be passed to the page component as props
    }
  }
}

function upcoming(props) {
    console.log(props.data)

  return (
    <>
      <div className="min-h-screen bg-gray-900">
        <Stripe />
        <Navbar />
        <div className="pt-28">
          <Heading mainHeading="APL" subHeading="Upcoming Matches" />
        </div>
        <div className="flex gap-2 justify-around flex-wrap">
        {props.data.map((element, index) => {
            return(
                <div key={index} className="flex gap-2 justify-around flex-wrap">
                <div className="container bg-gray-700/40 w-[450px] h-96 rounded-md mt-4 shadow-md shadow-current">
                    <div className="grid grid-cols-3 p-4">
                      <div>
                        <img
                          className="mt-6 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                          src={`teamlogos/${element.teamA}.png`}
                          alt=""
                        />
                        <p className="text-center m-2 text-slate-50 font-bold text-2xl">
                          {element.teamA}
                        </p>
                      </div>
                      <div className="flex justify-center mt-10">
                        <h1 className="mt-5 text-4xl text-white font-bold">V/S</h1>
                      </div>
                      <div>
                        <img
                          className="mt-6 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                          src={`teamlogos/${element.teamB}.png`}
                          alt=""
                        />
                        <p className="text-center m-2 text-slate-50 font-bold text-2xl">
                          {element.teamB}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center mt-8 flex-col">
                      <p className="text-center text-slate-50 text-xl">
                        {element.matchType}
                      </p>
                      <p className="text-center text-slate-50 font-semibold text-xl">
                        {element.newTime}
                      </p>
                    </div>
                  </div>
                </div>
            )
        })}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default upcoming;
