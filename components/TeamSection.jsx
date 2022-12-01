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
    "Fire-ball.png",
    "Gamma.png",
    "Hydros.png",
    "Mappers.png",
    "Masters.png",
    "Metaverse.png",
    "Pythons.png",
    "Shockers.png",
    "Spartans.png",
    "Vertex.png",
  ];

  const teamID = {
    'Arsenic': '3282810',
    'Alpha': '3282806',
    'Beta': '3282206',
    'Bots': '3282814',
    'Cloud 7': '3282812',
    'Explorer': '3282802',
    'Fire-ball': '3282819',
    'Gamma': '3282800',
    'Hydros': '3282813',
    'Mappers': '3282818',
    'Masters': '3282809',
    'Metaverse': '3282808',
    'Pythons': '3282799',
    'Shockers': '3282816',
    'Spartans': '3282817',
    'Vertex': '3282804',
}
  return (
    <>
      <div className="flex justify-center gap-5 flex-wrap">
        {images.map((element, index) => {
          return (
            <div key={index} class="max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-700/50 dark:border-gray-700 hover:scale-105 shadow-md shadow-current">
              <Link href={`/team/${teamID[element.replace(".png", "")]}`}>
                <img
                  class="rounded-t-lg h-64 w-64"
                  src={`/teamlogos/${element}`}
                  alt=""
                />
              </Link>
              <div class="p-5">
                <Link href={`/team/${teamID[element.replace(".png", "")]}`}>
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
