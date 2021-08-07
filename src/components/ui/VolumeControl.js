import classes from "./VolumeControl.module.css";

const VolumeControl = (props) => {
  return (
    <div className={classes.volumeControl}>
      <label className={classes.label} htmlFor="volume">
        volume
      </label>
      <input
        type="range"
        className="volume"
        name={classes.volume}
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
