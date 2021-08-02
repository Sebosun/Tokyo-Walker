import React from "react";
import "./YoutubeEmbed.css";

const YoutubeEmbed = ({ embedId }) => {
  return (
    <div className="video-background">
      <div className="video-foreground">
        <iframe
          src={`https://www.youtube.com/embed/${embedId}?autoplay=1&mute=1&controls=0&start=13&playsinline=1&rel=0&showinfo=0&enablejsapi=1&widgetid=1`}
          frameBorder="0"
          allowFullScreen="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title="Embedded youtube"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default YoutubeEmbed;
