import React from "react";

const Result = ({ state }) => {
  const { billAmount, tipPercentage, noOfPerson } = state;
  return (
    <div>
      <p>{`Total tip: ${(state.billAmount * tipPercentage) / 100}`}</p>
    </div>
  );
};

export default Result;
