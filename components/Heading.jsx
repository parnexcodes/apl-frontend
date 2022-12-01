import React from "react";
// import '../cssFiles/heading.css'
function Heading(prop) {
  return (
    <h1 className="italic font-bold text-center text-5xl p-12 text-white">
      <span>{prop.subHeading}</span>{" "}
    </h1>
  );
}

export default Heading;
