import "./App.css";
import YoutubeEmbed from "./components/YoutubeEmbed";
import music from "./data/music";
import ReactPlayer, { onStart } from "react-player";
import { useState, useEffect } from "react";
function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {}, []);

  const audioStarted = () => {
    console.log("started");
  };
  const startAudio = () => {
    setIsPlaying((prev) => !prev);
    setIsMuted((prev) => !prev);
  };

  return (
    <div className="modal">
      <div class="video">{<YoutubeEmbed embedId="0nTO4zSEpOs" />}</div>
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
      <button onClick={startAudio}>Start</button>
    </div>
  );
}

export default App;
