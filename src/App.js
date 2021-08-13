import { useState } from "react";
import { FaEye } from "react-icons/fa";

import Music from "./components/Wrappers/Music";
import Video from "./components/Wrappers/Video";
import Menu from "./components/Wrappers/Menu";

import "./App.css";

function App() {
  const [menuVisible, setMenuVisible] = useState(true);
  const menuHandler = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <>
      <Video />
      <Music />
      {menuVisible && <Menu />}
      <FaEye role="button" className="toggleVisible" onClick={menuHandler} />
    </>
  );
}

export default App;
