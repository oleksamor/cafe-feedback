import React from "react";
import s from "./Button.module.css";

const Button = ({ name }) => {
  return (
    <button className={s.btn} type="button">
      {name}
    </button>
  );
};

export default Button;
