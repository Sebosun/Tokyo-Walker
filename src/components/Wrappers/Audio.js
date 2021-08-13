import ReactPlayer from "react-player";
import { useContext } from "react";
import MusicContext from "../../store/music-context";
import { useSelector } from "react-redux";

const Audio = () => {
  const audioCtx = useContext(MusicContext);
  const audioSelector = useSelector((state) => state.audio.playing);

  return (
    <>
      <div className="audio-stream">
        <ReactPlayer
          className="audio"
          playing={audioSelector}
          volume={audioCtx.volume}
          url={audioCtx.url}
          onEnded={audioCtx.selectRandom}
        />
      </div>
    </>
  );
};
export default Audio;
