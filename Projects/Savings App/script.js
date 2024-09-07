// Initialize Feather icons
feather.replace();

// Roadmap Step 1: Select DOM elements
const goalAmount = document.getElementById("goal-amount");
const currentSaving = document.getElementById("current-savings");
const monthlyContribution = document.getElementById("monthly-contribution");
const calculateBtn = document.getElementById("calculate-btn");

const resultElement = document.getElementById("result");
const progressBar = document.getElementById("progress-bar");

calculateBtn.addEventListener("click", function () {
  const goalAmountDl = parseFloat(goalAmount.value);
  const currentSavingDl = parseFloat(currentSaving.value);
  const monthlyContributionDl = parseFloat(monthlyContribution.value);
  if (
    isNaN(goalAmountDl) ||
    isNaN(currentSavingDl) ||
    isNaN(monthlyContributionDl)
  ) {
    resultElement.textContent = `Invalid Input(s)`;
    resultElement.classList.add("show");
    return;
  }

  const currentProgress = (currentSavingDl / goalAmountDl) * 100;
  progressBar.style.width = `${currentProgress}%`;

  setTimeout(() => {
    if (currentSavingDl >= goalAmountDl) {
      resultElement.textContent =
        "🎉 Congratulations! your savings have bloomed to reach your goal!";
      resultElement.classList.add("show");
    } else {
      const result = Math.ceil(
        (goalAmountDl - currentSavingDl) / monthlyContributionDl
      );
      resultElement.textContent = `🍃 keep nurturing your savings! you'll reach your goal in ${result} months.`;
      resultElement.classList.add("show");
    }
  }, 100);
});

// Roadmap Step 3: Validate user input
function validateInput(element) {
  const value = element.value;
  if (value === "") {
    element.style.borderColor = "red";
  } else if (!isNaN(value)) {
    element.style.borderColor = "var(--primary-color)";
  }
}
goalAmount.addEventListener("blur", function () {
  validateInput(this);
});
currentSaving.addEventListener("blur", function () {
  validateInput(this);
});
monthlyContribution.addEventListener("blur", function () {
  validateInput(this);
});