import "./App.css";
import Audio from "./components/Wrappers/Audio";
import Video from "./components/Wrappers/Video";

function App() {
  return (
    <div className="modal">
      <Video />
      <Audio />
    </div>
  );
}

export default App;
