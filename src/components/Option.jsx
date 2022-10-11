import React from "react";

const Option = ({ option, handleOnClick, isChecked }) => {
  return (
    <div className="bg-white p-2 rounded-md my-5 outline outline-offset-2 outline-1 outline-blue-300 hover:bg-slate-300">
        <div className="cursor-pointer text-xl" onClick={()=>handleOnClick(option)}>{option}</div>
      </div>
  );
};

export default Option;
