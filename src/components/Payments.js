import React from "react";

const Payments = ({ state }) => {
  const { arrPayments } = state;
  console.log("Paso 1")
  console.log(arrPayments)
  return (
    <div className="tip-result">
      <div>
        <p className="label">Total Tip</p>
      </div>
    </div>
  );
};

export default Payments;
