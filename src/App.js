import { useState } from "react";
import "./App.css";
import Audio from "./components/Wrappers/Audio";
import Video from "./components/Wrappers/Video";
import Menu from "./components/Wrappers/Menu";
import VideoProvider from "./store/VideoProvider";
import AudioProvider from "./store/MusicProvider";
import { FaEye } from "react-icons/fa";

function App() {
  const [menuVisible, setMenuVisible] = useState(true);
  const menuHandler = () => {
    setMenuVisible((prev) => !prev);
  };
  return (
    <>
      <VideoProvider>
        <AudioProvider>
          <Video />
          <Audio />
          {menuVisible && <Menu />}
        </AudioProvider>
      </VideoProvider>
      <FaEye role="button" className="toggleVisible" onClick={menuHandler} />
    </>
  );
}

export default App;
