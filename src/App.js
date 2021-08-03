import { useState } from "react";
import "./App.css";
import Audio from "./components/Wrappers/Audio";
import Video from "./components/Wrappers/Video";
import Menu from "./components/Wrappers/Menu";
import VideoProvider from "./store/VideoProvider";
import AudioProvider from "./store/AudioProvider";
import { FaEye } from "react-icons/fa";

function App() {
  const [menuVisible, setMenuVisible] = useState(true);
  const menuHandler = () => {
    setMenuVisible((prev) => !prev);
  };
  return (
    <VideoProvider>
      <Video />
      <AudioProvider>
        <Audio />
        <FaEye className="toggleVisible" onClick={menuHandler} />
        {menuVisible && <Menu />}
      </AudioProvider>
    </VideoProvider>
  );
}

export default App;
