import "./App.css";
import YoutubeEmbed from "./components/YoutubeEmbed";

function App() {
  return (
    <div className="modal">
      <YoutubeEmbed audio={true} embedId="5yx6BWlEVcY" />
      <YoutubeEmbed embedId="0nTO4zSEpOs" />
    </div>
  );
}

export default App;
