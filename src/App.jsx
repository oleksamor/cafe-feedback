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

  return (
    <div>
      <Description />
      <Options />
      <Feedback />
    </div>
  );
}

export default App;
