import React from "react";

const Sources = (props) => {
  const videoUrl = `https://www.youtube.com/watch?v=${props.videoUrl}`;
  return (
    <div className={props.className}>
      <p>sources</p>
      <div>
        <a href={props.musicUrl} target="_blank">
          music
        </a>
      </div>
      <div>
        <a href={videoUrl} target="_blank">
          video
        </a>
      </div>
    </div>
  );
};

export default Sources;
