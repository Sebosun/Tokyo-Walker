import React from "react";
import classes from "./Github.module.css";
import { FiGithub } from "react-icons/fi";

const Github = () => {
  return (
    <>
      <a
        href="https://github.com/Sebosun/Tokyo-Walker"
        className={classes.github}
      >
        <FiGithub color="black" />
      </a>
    </>
  );
};

export default Github;
