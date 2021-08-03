import YoutubeEmbed from "../Youtube/YoutubeEmbed";
import VideoContext from "../../store/video-context";
import ReactPlayer from "react-player";
import "../Youtube/YoutubeEmbed.css";
import { useContext } from "react";

const Video = () => {
  const videoCtx = useContext(VideoContext);
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [isMuted, setIsMuted] = useState(true);
  console.log(videoCtx);
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
      {/* <div class="video">{<YoutubeEmbed embedId={videoCtx.url} />}</div>; */}
    </>
  );
};

export default Video;
