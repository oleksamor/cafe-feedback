import React, { useState } from "react";
import s from "./Options.module.css";

const Options = ({ reviews, onUpdate, resetReviews }) => {
  return (
    <div className={s.optns}>
      <button className={s.btn} onClick={() => onUpdate("good")}>
        Good {reviews.good}
      </button>
      <button className={s.btn} onClick={() => onUpdate("neutral")}>
        Neutral {reviews.neutral}
      </button>
      <button className={s.btn} onClick={() => onUpdate("bad")}>
        Bad {reviews.bad}
      </button>
      <button className={s.btn} onClick={() => resetReviews}>
        Reset
      </button>
    </div>
  );
};

export default Options;

// const [clicksBad, setClicksBad] = useState(0);
// const [clicksGood, setClicksGood] = useState(0);
// const [clicksNeutral, setClicksNeutral] = useState(0);

// const handleClickGood = () => {
//   setClicksGood(clicksGood + 1);
// };

// const handleClickBad = () => {
//   setClicksBad(clicksBad + 1);
// };

// const handleClickNeutral = () => {
//   setClicksNeutral(clicksNeutral + 1);
// };

// const handleClickReset = () => {
//   setClicksBad(0);
//   setClicksGood(0);
//   setClicksNeutral(0);
// };
