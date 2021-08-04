import classes from "./VolumeControl.module.css";

const VolumeControl = (props) => {
  return (
    <div className={classes.volumeControl}>
      <label htmlFor="volume">Volume</label>
      <input
        type="range"
        className="volume"
        name="volume"
        min="0"
        max="1"
        step="0.01"
        value={props.volume}
        onChange={props.onVolumeChange}
      />
    </div>
  );
};

export default VolumeControl;
