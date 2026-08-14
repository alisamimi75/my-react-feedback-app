import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";


const FeedbackStats = ( ) => {
  const {feedback}=useContext(FeedbackContext)
  //calculate rating average
  let ave =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  ave = ave.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="bg-pink-100 flex justify-between items-center w-full p-5">
      <h4 className="bg-rose-400 rounded-lg p-3 text-white font-bold w-1/3 text-center">{feedback.length} Reviews</h4>
      <h4 className="bg-rose-400 rounded-lg p-3 text-white font-bold w-1/3 text-center">average rating: {isNaN(ave) ? 0 : ave}</h4>
    </div>
  );
};

export default FeedbackStats;
