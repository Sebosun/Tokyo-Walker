import "./App.css";
import Audio from "./components/Wrappers/Audio";
import Video from "./components/Wrappers/Video";
import Menu from "./components/Wrappers/Menu";
import VideoProvider from "./store/VideoProvider";

function App() {
  return (
    <VideoProvider>
      <div className="modal">
        <Video />
        <Audio />
        <Menu />
      </div>
    </VideoProvider>
  );
}

export default App;
