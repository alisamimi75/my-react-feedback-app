import React, { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

const RatingSelect = ({ select }) => {
  const [selected, setSelected] = useState(5);
  const handleChange = (e) => {
    setSelected(+e.target.value);
    select(+e.target.value);
  };
  const { feedbackEdit } = useContext(FeedbackContext);
  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);
  return (
    <div className="flex justify-center items-center">
      <ul className="w-full flex justify-around items-center m-2 flex-wrap md:m-5">
        <li className="relative flex bg-[#f4f4f4] w-10 h-10 p-2.5 text-center rounded-full font-bold border border-[#eee] border-solid transition-all hover:bg-[#ff6a95] hover:text-white">
          <input
            type="radio"
            name="rating"
            id="num1"
            value="1"
            onChange={handleChange}
            checked={selected === 1}
            className="opacity-0 peer"
          />
          <label
            htmlFor="num1"
            className="absolute top-1/2 left-1/2 w-10 h-10 p-2.5 rounded-full cursor-pointer  -translate-x-1/2 -translate-y-1/2 peer-checked:bg-[#ff6a95] peer-checked:text-white"
          >
            1
          </label>
        </li>

        <li className="relative flex bg-[#f4f4f4] w-10 h-10 p-2.5 text-center rounded-full font-bold border border-[#eee] border-solid transition-all hover:bg-[#ff6a95] hover:text-white">
          <input
            type="radio"
            name="rating"
            id="num2"
            value="2"
            onChange={handleChange}
            checked={selected === 2}
            className="opacity-0 peer"
          />
          <label
            htmlFor="num2"
            className="absolute top-1/2 left-1/2 w-10 h-10 p-2.5 rounded-full cursor-pointer  -translate-x-1/2 -translate-y-1/2 peer-checked:bg-[#ff6a95] peer-checked:text-white"
          >
            2
          </label>
        </li>

        <li className="relative flex bg-[#f4f4f4] w-10 h-10 p-2.5 text-center rounded-full font-bold border border-[#eee] border-solid transition-all hover:bg-[#ff6a95] hover:text-white">
          <input
            type="radio"
            name="rating"
            id="num3"
            value="3"
            onChange={handleChange}
            checked={selected === 3}
            className="opacity-0 peer"
          />
          <label
            htmlFor="num3"
            className="absolute top-1/2 left-1/2 w-10 h-10 p-2.5 rounded-full cursor-pointer  -translate-x-1/2 -translate-y-1/2 peer-checked:bg-[#ff6a95] peer-checked:text-white"
          >
            3
          </label>
        </li>

        <li className="relative flex bg-[#f4f4f4] w-10 h-10 p-2.5 text-center rounded-full font-bold border border-[#eee] border-solid transition-all hover:bg-[#ff6a95] hover:text-white">
          <input
            type="radio"
            name="rating"
            id="num4"
            value="4"
            onChange={handleChange}
            checked={selected === 4}
            className="opacity-0 peer"
          />
          <label
            htmlFor="num4"
            className="absolute top-1/2 left-1/2 w-10 h-10 p-2.5 rounded-full cursor-pointer  -translate-x-1/2 -translate-y-1/2 peer-checked:bg-[#ff6a95] peer-checked:text-white"
          >
            4
          </label>
        </li>

        <li className="relative flex bg-[#f4f4f4] w-10 h-10 p-2.5 text-center rounded-full font-bold border border-[#eee] border-solid transition-all hover:bg-[#ff6a95] hover:text-white">
          <input
            type="radio"
            name="rating"
            id="num5"
            value="5"
            onChange={handleChange}
            checked={selected === 5}
            className="opacity-0 peer"
          />
          <label
            htmlFor="num5"
            className="absolute top-1/2 left-1/2 w-10 h-10 p-2.5 rounded-full cursor-pointer  -translate-x-1/2 -translate-y-1/2 peer-checked:bg-[#ff6a95] peer-checked:text-white"
          >
            5
          </label>
        </li>

        <li className="relative flex bg-[#f4f4f4] w-10 h-10 p-2.5 text-center rounded-full font-bold border border-[#eee] border-solid transition-all hover:bg-[#ff6a95] hover:text-white">
          <input
            type="radio"
            name="rating"
            id="num6"
            value="6"
            onChange={handleChange}
            checked={selected === 6}
            className="opacity-0 peer"
          />
          <label
            htmlFor="num6"
            className="absolute top-1/2 left-1/2 w-10 h-10 p-2.5 rounded-full cursor-pointer  -translate-x-1/2 -translate-y-1/2 peer-checked:bg-[#ff6a95] peer-checked:text-white"
          >
            6
          </label>
        </li>

        <li className="relative flex bg-[#f4f4f4] w-10 h-10 p-2.5 text-center rounded-full font-bold border border-[#eee] border-solid transition-all hover:bg-[#ff6a95] hover:text-white">
          <input
            type="radio"
            name="rating"
            id="num7"
            value="7"
            onChange={handleChange}
            checked={selected === 7}
            className="opacity-0 peer"
          />
          <label
            htmlFor="num7"
            className="absolute top-1/2 left-1/2 w-10 h-10 p-2.5 rounded-full cursor-pointer  -translate-x-1/2 -translate-y-1/2 peer-checked:bg-[#ff6a95] peer-checked:text-white"
          >
            7
          </label>
        </li>

        <li className="relative flex bg-[#f4f4f4] w-10 h-10 p-2.5 text-center rounded-full font-bold border border-[#eee] border-solid transition-all hover:bg-[#ff6a95] hover:text-white">
          <input
            type="radio"
            name="rating"
            id="num8"
            value="8"
            onChange={handleChange}
            checked={selected === 8}
            className="opacity-0 peer"
          />
          <label
            htmlFor="num8"
            className="absolute top-1/2 left-1/2 w-10 h-10 p-2.5 rounded-full cursor-pointer  -translate-x-1/2 -translate-y-1/2 peer-checked:bg-[#ff6a95] peer-checked:text-white"
          >
            8
          </label>
        </li>

        <li className="relative flex bg-[#f4f4f4] w-10 h-10 p-2.5 text-center rounded-full font-bold border border-[#eee] border-solid transition-all hover:bg-[#ff6a95] hover:text-white">
          <input
            type="radio"
            name="rating"
            id="num9"
            value="9"
            onChange={handleChange}
            checked={selected === 9}
            className="opacity-0 peer"
          />
          <label
            htmlFor="num9"
            className="absolute top-1/2 left-1/2 w-10 h-10 p-2.5 rounded-full cursor-pointer  -translate-x-1/2 -translate-y-1/2 peer-checked:bg-[#ff6a95] peer-checked:text-white"
          >
            9
          </label>
        </li>

        <li className="relative flex bg-[#f4f4f4] w-10 h-10 p-2.5 text-center rounded-full font-bold border border-[#eee] border-solid transition-all hover:bg-[#ff6a95] hover:text-white">
          <input
            type="radio"
            name="rating"
            id="num10"
            value="10"
            onChange={handleChange}
            checked={selected === 10}
            className="opacity-0 peer"
          />
          <label
            htmlFor="num10"
            className="absolute top-1/2 left-1/2 w-10 h-10 p-2.5 rounded-full cursor-pointer  -translate-x-1/2 -translate-y-1/2 peer-checked:bg-[#ff6a95] peer-checked:text-white "
          >
            10
          </label>
        </li>
      </ul>
    </div>
  );
};

export default RatingSelect;
