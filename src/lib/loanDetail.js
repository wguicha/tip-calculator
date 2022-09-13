function Detail(number, initBalance, intValue, amort, finBalance) {
    this.numberPayment = number;
    this.intialBalance = initBalance;
    this.interestValue = intValue;
    this.amortization = amort;
    this.finalBalance = finBalance;
}


export function loanDetail(pmt, ir, np, pv, fv) {
    /*
     * ir   - monthly payment
     * np   - number of periods (months)
     * pv   - present value
     * fv   - future value
     */
    let arrPayments =[]

    for(let i=1;i<=np;i++){
        const detail = new Detail(
        i,
        pv.toFixed(2),
        (pv * ir).toFixed(2),
        -(pmt + (pv * ir)).toFixed(2),
        (pv + (pv * ir) + pmt).toFixed(2)
        );
        arrPayments.push(detail)
        pv = (pv + (pv * ir) + pmt)
    }
    return arrPayments;
}