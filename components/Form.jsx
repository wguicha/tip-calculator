import React from "react";

const Form = ({ updateValues }) => {
  const percentages = [5, 10, 15, 20, 25];
  return (
    <div>
      <div className="input-group">
        <label htmlFor="billAmount">Valor Total</label>
        <input
            onChange={(e) => {
                console.log("Paso 1");
                updateValues({
                    billAmount: e.target.value,
                });
                console.log(percentages[1]);
            }}
          type="number"
          id="billAmount"
        />
      </div>
      {percentages.map((p) => {
        return <div key={p}>{`${p}%`}</div>;
      })}
    </div>
  );
};

export default Form;
