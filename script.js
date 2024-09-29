
const elements = {
  letterContainer: document.getElementById("letter-container"),
  optionsContainer: document.getElementById("options-container"),
  userInputSection: document.getElementById("user-input-section"),
  newGameContainer: document.getElementById("result-container"),
  newGameButton: document.getElementById("new-game-button"),
  resultText: document.getElementById("result-text"),
  optionsButtons: document.getElementById("options-buttons")
};

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

const generateWord = (optionValue) => {
  elements.letterContainer.classList.remove("hide");
  elements.userInputSection.innerText = "";

  let optionArray = options[optionValue];
  chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)].toUpperCase();
  
  let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');
  elements.userInputSection.innerHTML = displayItem;
};

const initializer = () => {
  winCount = 0;
  count = 0;

  elements.userInputSection.innerHTML = "";
  elements.letterContainer.classList.add("hide");
  elements.newGameContainer.classList.add("hide");
  elements.letterContainer.innerHTML = "";

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
            if (winCount == charArray.length) {
              elements.resultText.innerHTML = `<h2 class='win-msg'>You Win!!</h2><p>The word was <span>${chosenWord}</span></p>`;
              blocker();
            }
          }
        });
      } else {
        count += 1;
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

elements.newGameButton.addEventListener("click", initializer);
window.onload = initializer;
