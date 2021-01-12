function calculateCheck() {
  const miles = document.getElementById("miles").value;
  const dollies = document.getElementById("dollies").value;
  const casesCom = document.getElementById("cases-com").value;
  const breederTrans = document.getElementById("breeder-transfer").value;
  const downtime = document.getElementById("downtime").value;

  const SEMI_MILES_PRICE = 0.3135;
  const DOLLIES_PRICE = 4.4044;
  const CASES_COM_PRICE = 0.5254;
  const BREEDER_TRANS_PRICE = 20.00;
  const DOWNTIME_PRICE = 13.90;

  const totalMiles = miles * SEMI_MILES_PRICE;
  const totalDollies = dollies * DOLLIES_PRICE;
  const totalCasesCom = casesCom * CASES_COM_PRICE;
  const totalBreederTrans = breederTrans * BREEDER_TRANS_PRICE;
  const totalDowntime = downtime * DOWNTIME_PRICE;

  const totalPay = (totalMiles + totalDollies + totalCasesCom +
    totalBreederTrans + totalDowntime).toFixed(2);

  const calcPara = document.createElement("p");
  const calcText = document.createTextNode("Gross check: $" + totalPay);
  calcPara.appendChild(calcText);

  const calcDiv = document.getElementById("final-check");
  calcDiv.appendChild(calcPara);
}
