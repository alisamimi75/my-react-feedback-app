import { createContext, useEffect, useState } from "react";
import { v4 } from "uuid";

const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsloading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  useEffect(() => {
    fetchFeedback();
  }, []);
  //Fetch feedback function
  const fetchFeedback = async () => {
    const response = await fetch("https://6a7f55c33183f5fd884b0fc9.mockapi.io/feedback");
    const data = await response.json();
    setFeedback(data);
    setIsloading(false);
  };
  //delete feedbacks
  const deleteFeedback = async (id) => {
    if (window.confirm(`Are you sure you want to delete item number ${id}?`)) {
      await fetch(`https://6a7f55c33183f5fd884b0fc9.mockapi.io/feedback/${id}`, {
        method: "DELETE",
      });

       setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //adding function globally
  const addFeedback = async (newFeedback) => {
    const response = await fetch(
      "https://6a7f55c33183f5fd884b0fc9.mockapi.io/feedback",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newFeedback),
      },
    );

    const data = await response.json();
    setFeedback([data, ...feedback]);
  };

  //edit feedbacks
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  //update feedback item
  async function updateFeedbackFunc(id, updItem) {
    const response = await fetch(`https://6a7f55c33183f5fd884b0fc9.mockapi.io/feedback/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updItem),
    });
    const data = response.json();
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item)),
    );
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedbackFunc,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
