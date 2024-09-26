// DOM Elements
const elements = {
  letterContainer: document.getElementById("letter-container"),
  optionsContainer: document.getElementById("options-container"),
  userInputSection: document.getElementById("user-input-section"),
  newGameContainer: document.getElementById("result-container"),
  newGameButton: document.getElementById("new-game-button"),
  resultText: document.getElementById("result-text"),
  optionsButtons: document.getElementById("options-buttons")
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

const blocker = () => {
  let letterButtons = document.querySelectorAll(".letters");
  letterButtons.forEach((button) => {
    button.disabled = true;
  });
  elements.newGameContainer.classList.remove("hide");
};

const generateWord = (optionValue
