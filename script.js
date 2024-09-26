// DOM Elements
const elements = {
  letterContainer: document.getElementById("letter-container"),
  optionsContainer: document.getElementById("options-container"),
  userInputSection: document.getElementById("user-input-section"),
  newGameContainer: document.getElementById("result-container"),
  newGameButton: document.getElementById("new-game-button"),
  resultText: document.getElementById("result-text"),
  optionsButtons: document.getElementById("options-buttons"),
  hangmanParts: {
    head: document.getElementById("head"),
    body: document.getElementById("body"),
    leftArm: document.getElementById("left-arm"),
    rightArm: document.getElementById("right-arm"),
    leftLeg: document.getElementById("left-leg"),
    rightLeg: document.getElementById("right-leg"),
    gallows: document.getElementById("gallows"),
    verticalBar: document.getElementById("vertical-bar"),
    horizontalBar: document.getElementById("horizontal-bar"),
    rope: document.getElementById("rope"),
  }
};

// Game options
const options = {
  fruits: [
    "Apple", "Blueberry", "Mandarin", "Pineapple", "Pomegranate", "Watermelon",
    "Dragonfruit", "Carambola", "Passionfruit", "Limoncillo", "Bananas",
    "Lemons", "Lychee", "Kiwi", "Grapes"
  ],
  animals: [
    "Hedgehog", "Rhinoceros", "Squirrel", "Panther", "Walrus", "Zebra",
    "Monkey", "BaldEagle", "Orcas", "Otters", "Capybara", "Dragonfly",
    "Hippo", "Frog", "Rattlesnake", "Leopard", "Owl", "Ocelot", "Dog", "Squid"
  ],
  countries: [
    "India", "Hungary", "Switzerland", "Zimbabwe", "Dominica", "Afghanistan",
    "DominicanRepublic", "Egypt", "Bangladesh", "China", "SouthKorea",
    "Taiwan", "Ukraine", "UnitedStates", "Mexico", "Canada"
  ]
};

let winCount = 0;
let count = 0;
let chosenWord = "";

// Function to display options for the game
const displayOptions = () => {
  elements.optionsButtons.innerHTML = "";
  Object.keys(options).forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => {
      generateWord(option);
    });
    elements.optionsButtons.appendChild(button);
  });
};

// Function to disable letter buttons and show the new game option
const blocker = () => {
  let letterButtons = document.querySelectorAll(".letters");
  letterButtons.forEach((button) => {
    button.disabled = true;
  });
  elements.newGameContainer.classList.remove("hide");
};

// Function to generate a random word based on the selected category
const generateWord = (optionValue) => {
  elements.letterContainer.classList.remove("hide");
  elements.userInputSection.innerText = "";

  let optionArray = options[optionValue];
  chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)].toUpperCase();
  
  let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');
  elements.userInputSection.innerHTML = displayItem;
};

// Function to initialize or reset the game
const initializer = () => {
  winCount = 0;
  count = 0;

  elements.userInputSection.innerHTML = "";
  elements.letterContainer.classList.add("hide");
  elements.newGameContainer.classList.add("hide");
  elements.letterContainer.innerHTML = "";

  // Reset hangman parts visibility
  resetHangman();

  // Create buttons for letters A-Z
  for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");
    button.innerText = String.fromCharCode(i);
    button.addEventListener("click", () => {
      let charArray = chosenWord.split("");
      let dashes = document.getElementsByClassName("dashes");

      if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {
          if (char === button.innerText) {
            dashes[index].innerText = char;
            winCount += 1;
            // Check for win condition
            if (winCount == charArray.length) {
              elements.resultText.innerHTML = `<h2 class='win-msg'>You Win!!</h2><p>The word was <span>${chosenWord}</span></p>`;
              blocker();
            }
          }
        });
      } else {
        count += 1;
        // Update hangman parts
        updateHangman(count);
        // Check for lose condition
        if (count == 6) {
          elements.resultText.innerHTML = `<h2 class='lose-msg'>You Lose!!</h2><p>The word was <span>${chosenWord}</span></p>`;
          blocker();
        }
      }
      button.disabled = true;
    });
    elements.letterContainer.append(button);
  }

  displayOptions();
};

// Function to reset hangman parts
const resetHangman = () => {
  Object.keys(elements.hangmanParts).forEach(part => {
    elements.hangmanParts[part].style.display = "none"; // Hide all parts
  });
};

// Function to update hangman parts based on wrong guesses
const updateHangman = (count) => {
  const hangmanKeys = Object.keys(elements.hangmanParts);
  if (count > 0 && count <= hangmanKeys.length) {
    elements.hangmanParts[hangmanKeys[count - 1]].style.display = "block"; // Show part corresponding to the current count
  }
};

// Event listener for the new game button
elements.newGameButton.addEventListener("click", initializer);
window.onload = initializer;
