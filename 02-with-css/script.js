
document.addEventListener("DOMContentLoaded", function () {
    const rangeInput = document.querySelector("#length"); 
    const selectedLength = document.querySelector(".selected-length"); 
    rangeInput.addEventListener("input", function () {
        selectedLength.textContent = rangeInput.value;
    });
});

const $generatedPassword = document.querySelector(".generated-password");
const $lengthBar = document.querySelector("#length");
const $selectedLength = document.querySelector(".selected-length");
const $checkboxUppercase = document.querySelector("#uppercase");
const $checkboxLowercase = document.querySelector("#lowercase");
const $checkboxNumbers = document.querySelector("#numbers");
const $checkboxSymbols = document.querySelector("#symbols");
const $strengthIndicator = document.querySelector(".strength-indicator");
const $indicator = document.querySelectorAll(".indicator");
const $submitBtn = document.querySelector("button");
console.log($generatedPassword);
console.log($lengthBar);
console.log($selectedLength);
console.log($checkboxUppercase);
console.log($checkboxLowercase);
console.log($checkboxNumbers);
console.log($checkboxSymbols);
console.log($strengthIndicator);
console.log($indicator);
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;':,./<>?";
function generatePassword(length) {
  let password = "";
  let characters = "";
  if ($checkboxUppercase.checked) {
    characters += uppercase;
  }
  if ($checkboxLowercase.checked) {
    characters += lowercase;
  }
  if ($checkboxNumbers.checked) {
    characters += numbers;
  }
  if ($checkboxSymbols.checked) {
    characters += symbols;
  }
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  console.log(password);
  $generatedPassword.textContent = password;
  return password;
}
document.addEventListener("DOMContentLoaded", () => {
  $generatedPassword.textContent = "Generated Password";
  $selectedLength.textContent = $lengthBar.value;
  $strengthIndicator.textContent = "Too Weak";
  $indicator.forEach((indicator) => {
    indicator.style.display = "none";
    if (indicator.classList.contains("indicator-1")) {
      indicator.style.display = "block";
    }
  });
});
$checkboxUppercase.addEventListener("change", (e) => {
  console.log(e.target.checked);
  if (e.target.checked) {
  }
});
$lengthBar.addEventListener("input", (e) => {
  $selectedLength.textContent = e.target.value;
  console.log(e.target.value);
});
$submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("submit!");
  generatePassword($lengthBar.value);
})