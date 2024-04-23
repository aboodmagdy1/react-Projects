import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./components/StarRating";
function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating
        maxRating={8}
        onSetRatingEx={setMovieRating}
        color="blue"
        size={50}
      />
      <p>This movie have rating of{movieRating} </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */} <StarRating maxRating={10} defalutRating={0} />
    <StarRating
      maxRating={5}
      defalutRating={2}
      color="red"
      size={25}
      messages={["teribble", "bad", "okay", "good", "ammazing"]}
    />
    <Test />
  </React.StrictMode>
);
