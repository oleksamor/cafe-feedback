import React from "react";
import s from "./Options.module.css";
import Button from "./Button/Button.jsx";

const Options = () => {
  return (
    <div className={s.optns}>
      <Button name="Good" />
      <Button name="Neutral" />
      <Button name="Bad" />
      <Button name="Reset" />
    </div>
  );
};

export default Options;
