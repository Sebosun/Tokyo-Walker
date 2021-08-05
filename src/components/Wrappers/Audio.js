import ReactPlayer from "react-player";
import { useContext } from "react";
import AudioContext from "../../store/audio-context";

const Audio = () => {
  const audioCtx = useContext(AudioContext);

  const audioStarted = () => {
    console.log("started");
  };

  return (
    <>
      <div className="audio-stream">
        <ReactPlayer
          onStart={audioStarted}
          className="audio"
          playing={audioCtx.playing}
          volume={audioCtx.volume}
          url={audioCtx.url}
        />
      </div>
    </>
  );
};
export default Audio;
