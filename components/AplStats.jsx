import React from "react";

function AplStats() {
  return (
    <section className="p-6  dark:text-gray-100">
      <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3 border-2 border-slate-400 rounded-md">
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">50+</p>
          <p className="text-sm sm:text-base">SIXES</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">89</p>
          <p className="text-sm sm:text-base">TOTAL WICKETS</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">3</p>
          <p className="text-sm sm:text-base">NO. OF FOURS</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">8</p>
          <p className="text-sm sm:text-base">MAIDEN OVERS</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">22</p>
          <p className="text-sm sm:text-base"> DOT BALLS </p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">10+</p>
          <p className="text-sm sm:text-base">HIT WICKET</p>
        </div>
      </div>
    </section>
  );
}

export default AplStats;
