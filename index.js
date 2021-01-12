function calculateCheck() {
  const dollies = document.getElementById("dollies").value;
  const miles = document.getElementById("miles").value;
  const downtime = document.getElementById("downtime").value;

  const DOLLIES_PRICE = 4.4044;
  const SEMI_MILES_PRICE = 0.3135;
  const DOWNTIME_PRICE = 13.90;

  const totalDollies = dollies * DOLLIES_PRICE;
  const totalMiles = miles * SEMI_MILES_PRICE;
  const totalDowntime = downtime * DOWNTIME_PRICE;
  const totalPay = (totalDollies + totalMiles + totalDowntime).toFixed(2);

  const calcPara = document.createElement("p");
  const calcText = document.createTextNode("Check: $" + totalPay);
  calcPara.appendChild(calcText);

  const calcDiv = document.getElementById("final-check");
  calcDiv.appendChild(calcPara);
}
