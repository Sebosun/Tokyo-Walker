import VideoContext from "../../store/video-context";
import ReactPlayer from "react-player";
import video from "../../data/videos.json";
import "./Video.css";
import { useContext } from "react";

const Video = () => {
  const videoCtx = useContext(VideoContext);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const selectRandom = () => {
    const countryLength = video[videoCtx.country].length;
    videoCtx.addVideo(video[videoCtx.country][getRandomInt(countryLength)]);
  };

  return (
    <>
      <div className="video-background">
        <div className="video-foreground">
          <ReactPlayer
            volume={0.5}
            url={`https://www.youtube.com/watch?v=${
              videoCtx.url
            }${`?t=${videoCtx.start}`}`}
            muted={videoCtx.muted}
            onEnded={selectRandom}
            playing={true}
          />
        </div>
      </div>
    </>
  );
};

export default Video;
