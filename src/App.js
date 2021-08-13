import { useState } from "react";
import Music from "./components/Wrappers/Music";
import Video from "./components/Wrappers/Video";
import Menu from "./components/Wrappers/Menu";
import VideoProvider from "./store/VideoProvider";
import { FaEye } from "react-icons/fa";
import "./App.css";

function App() {
  const [menuVisible, setMenuVisible] = useState(true);
  const menuHandler = () => {
    setMenuVisible((prev) => !prev);
  };
  return (
    <>
      <VideoProvider>
        <Video />
        <Music />
        {menuVisible && <Menu />}
      </VideoProvider>
      <FaEye role="button" className="toggleVisible" onClick={menuHandler} />
    </>
  );
}

export default App;
