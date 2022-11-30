import React from "react";
// import'../cssFiles/videoSection.css'

function VideoSection() {
  return (
    <div className="vid">
      <ul class="card-wrapper">
        <iframe
          className="rounded-lg hover:scale-110"
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/2QlPf4dGY_c"
          title="YouTube video player"
          frameborder="0"
        ></iframe>
        <iframe
          className="rounded-lg hover:scale-110"
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/62GJ7iExejc"
          title="YouTube video player"
          frameborder="0"
        ></iframe>
        <iframe
          className="rounded-lg hover:scale-110"
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/O3H0pFRmU2g"
          title="YouTube video player"
          frameborder="0"
        ></iframe>
      </ul>
    </div>
  );
}

export default VideoSection;
