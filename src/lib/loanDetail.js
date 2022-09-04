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

    for(let i=1;i<=np;i++){
        const detail = new Detail(
        i,
        pv,
        pv * ir,
        pmt + (pv * ir),
        pv + (pv * ir) + pmt
        );
        pv = pv + (pv * ir) + pmt
        console.log(detail)
    }
    return Detail;
}