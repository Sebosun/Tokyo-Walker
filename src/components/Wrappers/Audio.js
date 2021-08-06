import ReactPlayer from "react-player";
import { useContext } from "react";
import AudioContext from "../../store/audio-context";

const Audio = () => {
  const audioCtx = useContext(AudioContext);

  return (
    <>
      <div className="audio-stream">
        <ReactPlayer
          className="audio"
          playing={audioCtx.playing}
          volume={audioCtx.volume}
          url={audioCtx.url}
          onEnded={audioCtx.selectRandom}
        />
      </div>
    </>
  );
};
export default Audio;
