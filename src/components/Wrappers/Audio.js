import ReactPlayer from "react-player";
import { useState } from "react";
import Button from "../ui/Button";

const Audio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioStarted = () => {
    console.log("started");
  };

  const startAudio = () => {
    setIsPlaying((prev) => !prev);
    setIsMuted((prev) => !prev);
  };

  return (
    <>
      <div className="audio-stream">
        <ReactPlayer
          onStart={audioStarted}
          className="audio"
          playing={isPlaying}
          volume={1}
          muted={isMuted}
          url="https://soundcloud.com/chillhopdotcom/toonorth-aftersome"
        />
      </div>
      <Button onClick={startAudio}>Start</Button>
    </>
  );
};
export default Audio;
