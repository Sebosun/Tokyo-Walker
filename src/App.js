import "./App.css";
import YoutubeEmbed from "./components/YoutubeEmbed";
import music from "./data/music";
function App() {
  console.log(music.lofi);
  return (
    <div className="modal">
      {<YoutubeEmbed embedId="0nTO4zSEpOs" />}
      {<YoutubeEmbed audio={true} embedId="5yx6BWlEVcY" />}
    </div>
  );
}

export default App;
