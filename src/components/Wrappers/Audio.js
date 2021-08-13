import ReactPlayer from "react-player";
import { useContext } from "react";
import MusicContext from "../../store/music-context";
import { useSelector } from "react-redux";

const Audio = () => {
  const audioCtx = useContext(MusicContext);
  const isPlaying = useSelector((state) => state.audio.playing);
  const volume = useSelector((state) => state.audio.volume);

  return (
    <>
      <div className="audio-stream">
        <ReactPlayer
          className="audio"
          playing={isPlaying}
          volume={volume}
          url={audioCtx.url}
          onEnded={audioCtx.selectRandom}
        />
      </div>
    </>
  );
};
export default Audio;
