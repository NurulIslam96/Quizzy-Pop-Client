import React from "react";

const Option = ({ option, handleOnClick, isChecked }) => {
  return (
    <div>
      <div className="topping">
        <div className="cursor-pointer" onClick={()=>handleOnClick(option)}>{option}</div>
      </div>
    </div>
  );
};

export default Option;
