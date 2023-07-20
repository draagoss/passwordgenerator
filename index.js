// Checkbox
var checkboxOne = document.querySelector(".first");
var checkboxTwo = document.querySelector(".second");
var checkboxThree = document.querySelector(".third");
var checkboxFour = document.querySelector(".fourth");

// Checkbox effect
function checkEffect1() {
  var effect1 = "";

  if (checkboxOne.checked == true) {
    effect1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else {
    effect1 = "";
  }

  return effect1;
}

function checkEffect2() {
  var effect2 = "";

  if (checkboxTwo.checked == true) {
    effect2 = "abcdefghijklmnopqrstuvwxyz";
  } else {
    effect2 = "";
  }

  return effect2;
}

function checkEffect3() {
  var effect3 = "";

  if (checkboxThree.checked == true) {
    effect3 = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  } else {
    effect3 = "";
  }

  return effect3;
}

function checkEffect4() {
  var effect4 = "";

  if (checkboxFour.checked == true) {
    effect4 = "0123456789";
  } else {
    effect4 = "";
  }

  return effect4;
}

function checkEffect() {
  effect = checkEffect1() + checkEffect2() + checkEffect3() + checkEffect4();
  return effect;
}

// Function to generate a random password
function generatePassword(length) {
  var charset = checkEffect();
  var password = "";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

var slider = document.querySelector("#slider");
var customSliderPrompt = document.querySelector("#customSliderPrompt");
var sliderValueElement = document.querySelector("#sliderValue");

// Function to show the custom slider prompt
function showSliderPrompt() {
  customSliderPrompt.style.display = "block";
}

// Function to handle user input from the custom slider prompt
function handleSliderInput() {

  var selectedValue = slider.value;
  customSliderPrompt.style.display = "none";

  document.querySelector(".password").textContent = generatePassword(selectedValue) + generatePassword(selectedValue) + generatePassword(selectedValue);

  if (checkEffect() == "") {
    document.querySelector(".strengthText").textContent = "...";
    document.querySelector("h1").textContent = "************";
    document.querySelector(".strength").style.color = "black";
  } else if (selectedValue > 0 && selectedValue < 5 && checkEffect() !== "") {
    document.querySelector(".strengthText").textContent = "Weak";
    document.querySelector(".strength").style.color = "red";
  } else if (selectedValue > 4 && selectedValue < 9 && checkEffect() !== "") {
    document.querySelector(".strengthText").textContent = "Medium";
    document.querySelector(".strength").style.color = "#FFD700";
  } else if (selectedValue > 8 && selectedValue < 13 && checkEffect() !== "") {
    document.querySelector(".strengthText").textContent = "Strong";
    document.querySelector(".strength").style.color = "#22dc22";
  }

}

// Update the slider value element
slider.addEventListener("input", function () {
  if (checkEffect() == "") {
    sliderValueElement.textContent = 0;
  } else {
    sliderValueElement.textContent = slider.value * 3;
  }
});

// Call the showSliderPrompt function when the slider is clicked
slider.addEventListener("click", function () {
  showSliderPrompt();
});

// Call the handleSliderInput function when the slider value is changed
slider.addEventListener("change", function () {
  handleSliderInput();
});

// Disable checkbox

// Get all the checkboxes
const checkboxes = [
  document.querySelector(".first"),
  document.querySelector(".second"),
  document.querySelector(".third"),
  document.querySelector(".fourth"),
];

function updateCheckboxes() {
  let uncheckedCount = 0;
  let checkedCheckbox;

  // Count unchecked checkboxes and find the checked one
  checkboxes.forEach(checkbox => {
    if (!checkbox.checked) {
      uncheckedCount++;
    } else {
      checkedCheckbox = checkbox;
    }
  });

  // If three checkboxes are unchecked, disable the checked one
  if (uncheckedCount === 3 && checkedCheckbox) {
    checkedCheckbox.disabled = true;
  } else {
    // Enable all checkboxes
    checkboxes.forEach(checkbox => {
      checkbox.disabled = false;
    });
  }
}

// Add event listeners to each checkbox to monitor changes
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updateCheckboxes);
});

// Initial check when the page loads
updateCheckboxes();