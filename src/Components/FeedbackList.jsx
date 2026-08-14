import React, { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

const FeedbackList = () => {
  const { feedback,isLoading } = useContext(FeedbackContext);
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p> No feedback yet.</p>;
  }
  return isLoading ? (
    <Spinner/>
  ) : (
    <>
      <div className="w-full flex flex-col items-center">
        <AnimatePresence>
          {feedback.map((item) => (
            <motion.div
            className="w-full flex justify-center"
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: -600, rotate: -90 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <FeedbackItem item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
  //   /*   return (
  //   <>
  // return (
  //   <>
  //     <div>
  //       <AnimatePresence>
  //         {feedback.map((item) => (
  //           <motion.div
  //             key={item.id}
  //             initial={{ opacity: 0 }}
  //             animate={{ opacity: 1 }}
  //             exit={{ opacity: 0, x: -600, rotate: -90 }}
  //             transition={{ duration: 1, ease: "easeInOut" }}
  //           >
  //             <FeedbackItem item={item}  />
  //           </motion.div>
  //         ))}
  //       </AnimatePresence>
  //     </div>
  //   </>
  //   /*   return (
  //   <>
  //     <div>
  //       {feedback.map((item) => (
  //         <FeedbackItem key={item.id} item={item}  handleDelete={handleDelete}/>
  //       ))}
  //     </div>

  //   </> */
  // );
};

export default FeedbackList;
