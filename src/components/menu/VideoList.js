import Videos from "../../data/videos.json";
// import classes from "VideoList.module.css";

const VideoList = () => {
  console.log(Videos);
  const changeDisplay = (item) => {
    console.log(item);
  };
  const list = Videos.japan.map((item) => {
    return (
      <li>
        <button onClick={() => changeDisplay(item)}>{item.name}</button>
      </li>
    );
  });
  return (
    <div className="videoList">
      <ul>{list}</ul>
    </div>
  );
};
export default VideoList;
