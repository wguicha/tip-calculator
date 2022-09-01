import Form from "../components/Form";
import Result from "../components/Result";
import Navbar from "../components/Navbar";
import { useState } from "react";
export default function Home() {
  const [state, setState] = useState({
    loanAmount: 50000,
    intRate: .01,
    term: 60,
    tipPercentage: 0,
    noOfPerson: 1,
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
      <h1>Tip Calculator</h1>
        <div className="wrapper">
          <Form state={state} updateValues={updateValues} />
          <Result state={state} />
        </div>
    </div>
    </>
  );
}
