import React, { useState } from "react";
import "./YoutubeEmbed.css";

const YoutubeEmbed = ({ embedId, audio }) => {
  // const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="video-background">
      <div className="video-foreground">
        <iframe
          src={`https://www.youtube.com/embed/${embedId}?autoplay=1${
            audio ? "" : "&mute=1"
          }&controls=0&start=13&playsinline=1&rel=0&showinfo=0&enablejsapi=1&widgetid=1`}
          frameBorder="0"
          allowFullScreen="1"
          title="Embedded youtube"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default YoutubeEmbed;
