import inquirer from "inquirer";
async function loanCalculator() {
  console.log("Loan Calculator");
  const questions = [
    { type: "input", name: "PV", message: "Enter the loan amount:" },
    { type: "input", name: "PMT", message: "Enter the monthly payment:" },
    {
      type: "input",
      name: "i",
      message: "Enter the monthly interest rate (in decimal form):",
    },
    { type: "input", name: "n", message: "Enter the number of months:" },
  ];
  const answers = await inquirer.prompt(questions);
  const PV = parseFloat(answers.PV);
  const PMT = parseFloat(answers.PMT);
  const i = parseFloat(answers.i);
  const n = parseInt(answers.n);
  const PVCalculated = calculateLoanAmount(PMT, i, n);
  console.log(`The loan amount you can get is: ${PVCalculated.toFixed(2)}`);
}
function calculateLoanAmount(PMT, i, n) {
  return (PMT * (1 - Math.pow(1 + i, -n))) / i;
}
loanCalculator();
