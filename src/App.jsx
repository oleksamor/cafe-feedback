import { useState } from "react";
import "./App.css";
import Description from "./Description/Description.jsx";

function App() {
  const [reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <div>
      <Description />
    </div>
  );
}

export default App;
