import React from "react";

const Payments = ({ state }) => {
    const { arrPayments } = state;
    console.log("Paso 1");
    console.log(arrPayments);
    return (
    <div className="payment-list">
        <table className="payments-table">
            <tr>
                <th>Payment</th>
                <th>Initial Balance</th>
                <th>Interest</th>
                <th>Amortization</th>
                <th>Final Balance</th>
            </tr>
            {arrPayments.map((p) => {
                return (
                    <tr key={p.numberPayment}>
                        <td>{`${p.numberPayment}`}</td>
                        <td>{`${p.intialBalance}`}</td>
                        <td>{`${p.interestValue}`}</td>
                        <td>{`${p.amortization}`}</td>
                        <td>{`${p.finalBalance}`}</td>
                    </tr>
            )})}
        </table>
    </div>
    );
};

export default Payments;
