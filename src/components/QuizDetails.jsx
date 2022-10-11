import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "./Questions";

const QuizDetails = () => {
  const QuizDetails = useLoaderData();
  const { logo, name, questions } = QuizDetails.data;
  return (
    <div className="bg-slate-100">
      <div className="flex justify-center">
        <img src={logo} className="md:w-1/6 md:px-0 px-5 mt-10" alt="" />
      </div>
        <p className="font-semibold text-slate-600 text-center text-3xl my-5">Quiz of {name}</p>
      <div className="flex items-center flex-col">
        {
            questions.map((qs) => <Questions key={qs.id} qs={qs}></Questions>)
        }
      </div>
    </div>
  );
};

export default QuizDetails;
