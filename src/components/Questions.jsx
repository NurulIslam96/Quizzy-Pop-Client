import React from "react";
import { toast } from 'react-toastify';
import Option from "./Option";

const Questions = ({ qs }) => {
  const { question, options, correctAnswer } = qs;

  const handleOnClick = (option) => {
    if (option === correctAnswer) {
        toast.success("WoW! Correct Answer", {
            position: toast.POSITION.TOP_CENTER, autoClose: 500
          });
    } else {
        toast.error("Wrong Answer, Try Again", {
            position: toast.POSITION.TOP_CENTER, autoClose: 500
          });
    }
  };

  return (
    <div className="text-center my-5 bg-slate-500 rounded-md p-10 lg:w-2/5 m-1">
      <div>
        <p className="text-3xl text-white"><span className="outline-2">Quiz Ques:</span> {question}</p>
        <div className="mt-5">
          {options.map((option) => (
            <Option
              key={option}
              option={option}
              handleOnClick={handleOnClick}
            ></Option>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
