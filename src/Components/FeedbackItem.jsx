import React, { useContext, useState } from "react";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  //const [rating, setRating] = useState(10);
  // const [comment, setComment] = useState("This is an example of a feedback");
  const { deleteFeedback ,editFeedback } = useContext(FeedbackContext);



  return (
    <>
      <Card reverse={false}>
        <div className="w-12 h-12 leading-none font-bold absolute -top-2.5 -left-2.5 rounded-full bg-pink-400 text-white flex justify-center items-center text-3xl">
          {item.rating}
        </div>{" "}
        <button
          className="absolute top-2.5 right-5 cursor-pointer"
          onClick={() => {
            deleteFeedback(item.id);
          }}
        >
          <FaTimes color="purple" />
        </button>
        <button
          className="absolute top-2.5 right-10 cursor-pointer"
          onClick={() => {
            editFeedback(item);
          }}
        >
          <FaEdit color="purple" />
        </button>
        <div className="text-lg wrap-anywhere ">{item.text}</div>
      </Card>
    </>
  );
};

export default FeedbackItem;
