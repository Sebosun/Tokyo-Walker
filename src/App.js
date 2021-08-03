import "./App.css";
import Audio from "./components/Wrappers/Audio";
import Video from "./components/Wrappers/Video";
import Menu from "./components/Wrappers/Menu";
import VideoProvider from "./store/VideoProvider";
import AudioProvider from "./store/AudioProvider";
function App() {
  return (
    <VideoProvider>
      <div className="modal">
        <Video />
        <AudioProvider>
          <Audio />
          <Menu />
        </AudioProvider>
      </div>
    </VideoProvider>
  );
}

export default App;
