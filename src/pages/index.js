import Form from "../components/Form";
import Result from "../components/Result";
import Navbar from "../components/Navbar";
import Payments from "../components/Payments";
import { useState } from "react";
export default function Home() {
  const [state, setState] = useState({
    loanAmount: 100000,
    intRate: .02,
    term: 60,
    tipPercentage: 0,
    noOfPerson: 1,
    arrPayments: [],
  });

  const updateValues = (newState) => {
    setState({
      ...state,
      ...newState,
    });
  };
  return (
    <>
    <div className="navbar-container">
      <Navbar />
    </div>
    <div className="container">
      <h1>Loan Calculator</h1>
        <div className="wrapper">
          <Form state={state} updateValues={updateValues} />
          <Payments state={state} />
          <Result state={state} />
        </div>
    </div>
    </>
  );
}
