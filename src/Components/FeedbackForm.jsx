import React, { useContext, useState, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = ({}) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);

  const [btnDisabled, setBtnDisabled] = useState(true);

  const [message, setMessage] = useState("");
    const { addFeedback,feedbackEdit,updateFeedbackFunc } = useContext(FeedbackContext);
  useEffect(()=>{if (feedbackEdit.edit ===true) {
    setBtnDisabled(false)
    setText(feedbackEdit.item.text)
    setRating(feedbackEdit.item.rating)

  }
  },[feedbackEdit])

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage(" Text must be at least 10 characters. ");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      text,
      rating,
    };
    
    if (feedbackEdit.edit === true) {
      updateFeedbackFunc(feedbackEdit.item.id,newFeedback )
    }else{addFeedback(newFeedback);}
    setText("");
    setBtnDisabled(true);
    
  };

  return (
    <Card>
      <form onSubmit={handleSubmit} className=" w-full">
        <h2 className="font-serif text-2xl text-wrap">How would you rate your service with us?</h2>
        {/*rating system component*/}
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="flex justify-between border border-solid border-[#ccc] py-2 px-2.5 rounded-lg focus-within:border-blue-500">
          <input
            type="text"
            placeholder="write a review"
            onChange={handleTextChange}
            value={text}
            className="border-none outline-none focus:outline-none w-full"
          />
          <Button
            type="submit"
            className="bg-pink-400 text-white px-4 py-2 rounded ml-2 hover:bg-pink-700 cursor-pointer"
            isDisabled={btnDisabled}
          >
            {feedbackEdit.edit?"Update":"Send"}
          </Button>
        </div>
        {message && (
          <div className="pt-1 text-center text-red-400">{message}</div>
        )}
      </form>
    </Card>
  );
};

export default FeedbackForm;
