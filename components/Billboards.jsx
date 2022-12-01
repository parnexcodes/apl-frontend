import React from "react";
import { CardsData } from "./CardsData";

function Billboards(props) {
  const arr = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="flex justify-around flex-wrap gap-4">
        {CardsData.map((element, index) => {
          return (
            <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:scale-105">
              <a href="#">
                <img className="rounded-t-lg h-64 w-64" src={"demo.png"} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white text-center">
                    {element.info}
                  </h5>
                </a>
              </div>
              <div>
                <a href="#">
                  <h5 className="mb-2 text-2xl font-light tracking-tight text-gray-900 dark:text-white text-center">
                    {element.teamName}
                  </h5>
                </a>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
                    {element.data}
                  </h5>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Billboards;
