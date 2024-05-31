const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");
const greenCheckMark = document.getElementById("green-check");
const redX = document.getElementById("red-x");

const checkPhoneNumber = (input) => {
    greenCheckMark.setAttribute("hidden", true);
    redX.setAttribute("hidden", true);
    if (!input) {
      alert("Please provide a phone number");
    }

   const numberRegex = new RegExp(`^(1[\\s\\-]?)?(\\([0-9]{3}\\)|[0-9]{3})[\\s\\-]?[0-9]{3}[\\s\\-]?[0-9]{4}$`)
       
    if (numberRegex.test(input)) {
      results.innerHTML += `<h2>Valid US number: ${userInput.value}</h2>`;
      greenCheckMark.removeAttribute("hidden");
    }
    else {
      results.innerHTML += `<h2>Invalid US number: ${userInput.value}</h2>`;
      redX.removeAttribute("hidden");
    }
};

checkBtn.addEventListener("click", () => {
  checkPhoneNumber(userInput.value);
    return;
});

userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    checkPhoneNumber(userInput.value);
    return;
}});

clearBtn.addEventListener("click", () => {
  userInput.value = "";
  results.innerHTML = "";
  greenCheckMark.setAttribute("hidden", true);
    redX.setAttribute("hidden", true);
    return;
});
