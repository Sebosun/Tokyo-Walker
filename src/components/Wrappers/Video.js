import YoutubeEmbed from "../Youtube/YoutubeEmbed";
import VideoContext from "../../store/video-context";
import ReactPlayer from "react-player";
import "./Video.css";
import { useContext } from "react";

const Video = () => {
  const videoCtx = useContext(VideoContext);

  return (
    <>
      <div className="video-background">
        <div className="video-foreground">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoCtx.url}`}
            muted={true}
            playing={true}
          />
        </div>
      </div>
    </>
  );
};

export default Video;
