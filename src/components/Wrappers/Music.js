import ReactPlayer from "react-player";
import { useSelector, useDispatch } from "react-redux";
import { selectRandomSong } from "../../store/redux/audio-slice";

const Music = () => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.audio.playing);
  const volume = useSelector((state) => state.audio.volume);
  const url = useSelector((state) => state.audio.url);
  const stateGenre = useSelector((state) => state.audio.genre);
  return (
    <>
      <div className="audio-stream">
        <ReactPlayer
          className="audio"
          playing={isPlaying}
          volume={volume}
          url={url}
          onEnded={() => dispatch(selectRandomSong(stateGenre))}
        />
      </div>
    </>
  );
};
export default Music;
