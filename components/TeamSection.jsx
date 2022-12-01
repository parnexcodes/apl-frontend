import React from "react";
import Link from "next/link";
// import '../cssFiles/teamSection.css'

function TeamSection() {
  const images = [
    "Alpha.png",
    "Arsenic.png",
    "Beta.png",
    "Bots.png",
    "Cloud 7.png",
    "Explorer.png",
    "Falcons.png",
    "Fire-ball.png",
    "Gamma.png",
    "Hydros.png",
    "Mappers.png",
    "Masters.png",
    "Metaverse.png",
    "Pythons.png",
    "Shockers.png",
    "Spartans.png",
    "Tigress.png",
    "Vertex.png",
  ];
  return (
    <>
      <div className="flex justify-center gap-5 flex-wrap">
        {images.map((element) => {
          return (
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-700/50 dark:border-gray-700 hover:scale-105 shadow-md shadow-current">
              <Link href={`/team/${element.replace(".png", "")}`}>
                <img
                  class="rounded-t-lg h-64 w-64"
                  src={`/teamlogos/${element}`}
                  alt=""
                />
              </Link>
              <div class="p-5">
                <Link href={`/team/${element.replace(".png", "")}`}>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    {element.replace(".png", "")}
                  </h5>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TeamSection;
