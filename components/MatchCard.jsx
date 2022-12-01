import React from "react";
import Link from "next/link";

function MatchCard(props) {
  let data = props.data;
  return (
    <>
    {data.map((element) => {
        return (
            <>
            <Link href={`/match/${element.matchID}`}>
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
                <p className="text-center text-slate-50 text-xl">{element.scoreA}</p>
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
                <p className="text-center text-slate-50 text-xl">{element.scoreB}</p>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <p className="text-center text-slate-50 font-semibold text-xl">
                {element.info}
              </p>
            </div>
          </div>
          </Link>
          </>
        )
    })}
    </>
  );
}

export default MatchCard;
