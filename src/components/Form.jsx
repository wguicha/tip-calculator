import React from "react";
import PMT from "../lib/pmt";
import { loanDetail } from "../lib/loanDetail";

const Form = ({ state, updateValues }) => {
  const { loanAmount, intRate, term,  tipPercentage, noOfPerson } = state;
  const percentages = [5, 10, 15, 20, 25];
  const monthlyPayment = PMT(intRate, term,loanAmount, 0 , 0)
  console.log(monthlyPayment)
  const detail = loanDetail(monthlyPayment, intRate, term, loanAmount, 0)
  console.log(detail)
  return (
    <div className="input-container">
      <div className="input-group">
        <div className="input input-loanAmount">
          <label htmlFor="loanAmount">Loan Amount:</label>
          <input
            onChange={(e) => {
              updateValues({
                loanAmount: e.target.value,
              });
            }}
            value={loanAmount}
            type="number"
            id="loanAmount"
          />
        </div>
        <div className="input input-intRate">
          <label htmlFor="intRate">Interest Rate:</label>
          <input
            onChange={(e) => {
              updateValues({
                intRate: e.target.value,
              });
            }}
            value={`${(intRate*100).toFixed(2)}%`}
            type="text"
            id="intRate"
          />
        </div>
        <div className="input input-term">
          <label htmlFor="term">Number of Months:</label>
          <input
            onChange={(e) => {
              updateValues({
                term: e.target.value,
              });
            }}
            value={`${(term)} Months`}
            type="text"
            id="term"
          />
        </div>
      </div>
      <div className="percentage-list">
        {percentages.map((p) => {
          return (
            <div
              className={`percentage-list__box ${
                tipPercentage == p ? "active" : ""
              }`}
              onClick={() => {
                updateValues({ tipPercentage: p });
              }}
             key={p}
             >{`${p}%`}
            </div>
          );
        })}
        <input
          className="custom-tip-input"
          onChange={(e) => {
            updateValues({
              tipPercentage:
                e.target.value < 0
                  ? 0
                  : e.target.value > 100
                  ? 100
                  : e.target.value,
            });
          }}
          value={`${tipPercentage}`}
          max={100}
          min={0}
          type={"number"}
          placeholder="custom"
        />
      </div>
      <div className="input-group">
        <label htmlFor="noOfPerson">Número Personas:</label>
        <input
          onChange={(e) => {
            updateValues({
              noOfPerson: e.target.value,
            });
          }}
          min={1}
          value={noOfPerson}
          type="number"
          id="noOfPerson"
        />
      </div>
    </div>
  );
};

export default Form;
