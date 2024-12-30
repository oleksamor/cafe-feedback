import React from "react";
import s from "./Feedback.module.css";

const Feedback = ({ reviews }) => {
  return (
    <div className={s.fdbck}>
      <div>Good:{reviews.good}</div>
      <div>Neutral: {reviews.neutral}</div>
      <div>Bad: {reviews.bad}</div>
    </div>
  );
};

export default Feedback;
