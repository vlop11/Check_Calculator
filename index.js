const SEMI_MILES_PAY = 0.3135;
const DOLLIES_PAY = 4.4044;
const CASES_PAY = 0.5254;
const BREEDER_TRANS_PAY = 25.00;
const DOWNTIME_PAY = 13.90;

function calculateCheck() {
  const hours = document.getElementById("hours").value;
  const miles = document.getElementById("miles").value;
  const dollies = document.getElementById("dollies").value;
  const cases = document.getElementById("cases").value;
  const breederTrans = document.getElementById("breeder-transfer").value;
  const downtime = document.getElementById("downtime").value;

  const totalMilesPay = miles * SEMI_MILES_PAY;
  const totalDolliesPay = dollies * DOLLIES_PAY;
  const totalCasesPay = cases * CASES_PAY;
  const totalBreederTransPay = breederTrans * BREEDER_TRANS_PAY;
  const totalDowntimePay = downtime * DOWNTIME_PAY;
  var totalPay = totalMilesPay + totalDolliesPay + totalCasesPay +
    totalBreederTransPay + totalDowntimePay;

if (hours != 0 && hours > 40) {
  const hoursNoDT = hours - downtime;
  const dolliesPerHour = dollies/hoursNoDT;

  const approxOTPayRate = 1.38743 * dolliesPerHour + 5.85692;
  const totalOT = approxOTPayRate * (hours - 40);

  totalPay = totalPay + totalOT;
}

  const calcPara = document.createElement("p");
  const calcText = document.createTextNode("Approx. gross check: $" +
    totalPay.toFixed(2));
  calcPara.appendChild(calcText);

  const calcDiv = document.getElementById("final-check");
  calcDiv.appendChild(calcPara);
}
