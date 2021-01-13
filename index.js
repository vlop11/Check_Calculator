function calculateCheck() {
  const miles = document.getElementById("miles").value;
  const dollies = document.getElementById("dollies").value;
  const casesCom = document.getElementById("cases-com").value;
  const breederTrans = document.getElementById("breeder-transfer").value;
  const downtime = document.getElementById("downtime").value;
  const otHours = document.getElementById("ot-hours").value;

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
  var totalPay = totalMiles + totalDollies + totalCasesCom +
    totalBreederTrans + totalDowntime;

  const approxOTPayRate = 0.00614 * totalPay + 2.16399;
  const totalOT = approxOTPayRate * otHours;

  console.log(approxOTPayRate);
  console.log(totalOT);

  totalPay = (totalPay + totalOT).toFixed(2);
  console.log(totalPay);

  const calcPara = document.createElement("p");
  const calcText = document.createTextNode("Approx. gross check: $" + totalPay);
  calcPara.appendChild(calcText);

  const calcDiv = document.getElementById("final-check");
  calcDiv.appendChild(calcPara);
}
