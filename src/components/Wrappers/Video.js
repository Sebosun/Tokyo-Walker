import YoutubeEmbed from "../Youtube/YoutubeEmbed";
import VideoContext from "../../store/video-context";
import { useContext } from "react";

const Video = () => {
  const videoCtx = useContext(VideoContext);
  console.log(videoCtx);
  return <div class="video">{<YoutubeEmbed embedId={videoCtx.url} />}</div>;
};

export default Video;
