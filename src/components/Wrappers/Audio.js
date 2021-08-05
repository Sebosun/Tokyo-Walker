import ReactPlayer from "react-player";
import { useContext } from "react";
import AudioContext from "../../store/audio-context";
import music from "../../data/music.json";

const Audio = () => {
  const audioCtx = useContext(AudioContext);

  const audioStarted = () => {};

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const selectRandom = () => {
    const genreLength = music[audioCtx.genre].length;
    audioCtx.changeAudio(music[audioCtx.genre][getRandomInt(genreLength)]);
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
          onEnded={selectRandom}
        />
      </div>
    </>
  );
};
export default Audio;
