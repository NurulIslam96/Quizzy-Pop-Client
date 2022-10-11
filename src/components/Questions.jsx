import React from "react";
import Option from "./Option";

const Questions = ({ qs }) => {
  const { question, options, correctAnswer } = qs;
// console.log(correctAnswer)
  const handleOnClick = (option) => {
    if(option === correctAnswer){
        alert('correct answer')
    }else{
        alert('wrong answer')
    }
  };

//   console.log(qs);
  return (
    <div className="text-center my-5">
      <p>Quiz Ques: {question}</p>
      <div className="">
        {options.map((option) => <Option key={option} option={option} handleOnClick={handleOnClick}></Option>)}
      </div>
    </div>
  );
};

export default Questions;
