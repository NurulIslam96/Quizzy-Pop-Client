import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { toast } from 'react-toastify';
import Option from "./Option";

const Questions = ({ qs }) => {
  const { question, options, correctAnswer } = qs;
  const [isEyeOpen, setIsEyeOpen] = React.useState(false);
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
    <div className="text-center my-5 bg-slate-500 rounded-md p-10 lg:w-2/5 m-1 relative">
      <FontAwesomeIcon onClick={() => setIsEyeOpen(true)} className='text-white text-2xl absolute right-3 top-3 hover:text-slate-300 cursor-pointer' icon={faEye} />
      <div>
        {isEyeOpen && (
            <div className='text-3xl text-white absolute inset-0 flex flex-col items-center justify-center rounded-md bg-slate-500'>
                <p>Correct Answer: {correctAnswer} </p> 
                <button className='text-2xl text-black bg-white px-5 py-1 mt-5 rounded-md hover:bg-slate-300' onClick={() => setIsEyeOpen(false)}>Hide</button>
            </div>
        )}
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
