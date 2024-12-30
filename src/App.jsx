import { useState } from "react";
import "./App.css";
import Description from "./Description/Description.jsx";
import Options from "./Options/Options.jsx";
import Feedback from "./Feedback/Feedback.jsx";

function App() {
  const [reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const resetReviews = () => {
    return setReviews({
      ...reviews,
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const updateFeedback = (feedbackType) => {
    return setReviews({
      ...reviews,
      [feedbackType]: reviews[feedbackType] + 1,
    });
  };
  return (
    <div>
      <Description />
      <Options
        reviews={reviews}
        onUpdate={updateFeedback}
        resetReviews={resetReviews}
      />
      {/* <Feedback reviews={reviews} onUpdate={updateFeedback} /> */}
    </div>
  );
}

export default App;
