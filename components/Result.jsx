import React from "react";

const Result = ({ state }) => {
  const { billAmount, tipPercentage, noOfPerson } = state;
  const totalTip = (state.billAmount * tipPercentage) / 100;
  return (
    <div className="tip-result">
      <p>{`Total tip: ${totalTip}`}</p>
      <p>{`Total tip: ${Number(totalTip / noOfPerson).toFixed(2)}`}</p>
    </div>
  );
};

export default Result;
