import "./App.css";
import Audio from "./components/Wrappers/Audio";
import Video from "./components/Wrappers/Video";
import Menu from "./components/Wrappers/Menu";

function App() {
  return (
    <div className="modal">
      <Video />
      <Audio />
      <Menu />
    </div>
  );
}

export default App;
