import ReactPlayer from "react-player";
import { useSelector, useDispatch } from "react-redux";

import "./Video.css";
import { selectRandomVideo } from "../../store/redux/video-slice";

const Video = () => {
  const dispatch = useDispatch();

  const muted = useSelector((state) => state.video.muted);
  const url = useSelector((state) => state.video.url);
  const start = useSelector((state) => state.video.start);
  const country = useSelector((state) => state.video.country);

  return (
    <>
      <div className="video-background">
        <div className="video-foreground">
          <ReactPlayer
            volume={0.5}
            url={`https://www.youtube.com/watch?v=${url}${`?t=${start}`}`}
            muted={muted}
            onEnded={() => dispatch(selectRandomVideo(country))}
            playing={true}
          />
        </div>
      </div>
    </>
  );
};

export default Video;
