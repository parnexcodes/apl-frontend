import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
// import "../cssFiles/Slider.css"

const Slider = () => {
  const images = [
    "angel.jpg",
    "arsenic.jpg",
    "beta.jpg",
    "bots.jpg",
    "cloud.jpg",
    "explorer.jpg",
    "falcons.jpg",
    "fireball.jpg",
    "gamma.jpg",
    "hydros.jpg",
    "mappers.jpg",
    "masters.jpg",
    "metaverse.jpg",
    "pythons.jpg",
    "shockers.jpg",
    "spartans.jpg",
    "tigress.jpg",
  ];

  return (
    <>
      <Slide
        autoplay={true}
        arrows={false}
        transitionDuration={1500}
        duration={2000}
        canSwipe={true}
      >
        {images.map((element) => {
          return (
            <div className="each-slide-effect pt-12">
              <div
                style={{
                  backgroundImage: `url(/teampics/${element})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          );
        })}
      </Slide>
    </>
  );
};

export default Slider;
