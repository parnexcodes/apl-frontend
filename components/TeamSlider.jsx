import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
// import "../cssFiles/teamSlider.css"

const TeamSlider = () => {
  const images = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
    "10.jpeg",
    "11.jpeg",
    "12.jpeg",
    "13.jpeg",
    "14.jpeg",
    "15.jpeg",
    "16.jpeg",
    "17.jpeg",
    "18.jpeg",
    "19.jpeg",
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
        {images.map((element, index) => {
          return (
            <div key={index} className="each-slide-effect">
              <div
                style={{
                  backgroundImage: `url(/banners/${element})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
          );
        })}
      </Slide>
    </>
  );
};

export default TeamSlider;
