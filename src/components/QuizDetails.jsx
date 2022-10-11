import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "./Questions";

const QuizDetails = () => {
  const QuizDetails = useLoaderData();
  const { logo, name, questions } = QuizDetails.data;
  return (
    <div>
      <div className="flex justify-center">
        <div className="text-center">
          <img className="md:w-56 w-32" src={logo} alt="" />
          <p className="text-2xl">{name}</p>
        </div>
      </div>
      <div>
        {
            questions.map(qs => <Questions key={qs.id} qs={qs}></Questions>)
        }
      </div>
    </div>
  );
};

export default QuizDetails;
