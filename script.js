document.addEventListener('DOMContentLoaded', (event) => {
  // Your existing code will be inside this event listener
  const elements = {
    letterContainer: document.getElementById("letter-container"),
    optionsContainer: document.getElementById("options-container"),
    userInputSection: document.getElementById("user-input-section"),
    newGameContainer: document.getElementById("new-game-container"),
    newGameButton: document.getElementById("new-game-button"),
    resultText: document.getElementById("result-text"),
    optionsButtons: document.getElementById("options-buttons")
  };

  const options = {
    fruits: [
      "Apple", "Banana", "Orange", "Grapes", "Mango", "Pineapple", "Strawberry",
      "Peach", "Cherry", "Watermelon", "Lemon", "Kiwi", "Papaya", "Avocado", 
      "Coconut", "Plum", "Raspberry", "Blueberry", "Cantaloupe", "Pomegranate", 
      "Blackberry", "Apricot", "Tangerine", "Dragonfruit", "Guava", "Lychee", 
      "Pear", "Fig", "Cranberry", "Jackfruit", "Mulberry", "Nectarine", 
      "Passionfruit", "Tamarind", "Persimmon", "Starfruit", "Gooseberry", 
      "Clementine", "Soursop", "Longan", "Cherries"
    ],
    animals: [
      "Dog", "Cat", "Elephant", "Tiger", "Lion", "Giraffe", "Koala", "Monkey",
      "Penguin", "Bear", "Kangaroo", "Horse", "Rabbit", "Fish", "Duck", "Squirrel", 
      "Horse", "Cow", "Sheep", "Panda", "Cheetah", "Wolf", "Fox", "Snake", 
      "Alligator", "Bat", "Eagle", "Parrot", "Zebra", "Turtle", "Llama", 
      "Camel", "Bison", "Otter", "Hippopotamus", "Whale", "Gorilla", 
      "Rhinoceros", "Jaguar", "Owl", "Mole", "Scorpion", "Frog"
    ],
    countries: [
      "UnitedStates", "Canada", "Mexico", "Brazil", "India", "China", "Russia",
      "Australia", "France", "Germany", "Italy", "UnitedKingdom", "Japan", "Spain",
      "Argentina", "SouthKorea", "SouthAfrica", "Egypt", "Italy", "SouthAmerica",
      "Turkey", "Greece", "Norway", "Denmark", "Sweden", "Finland", "Ireland", 
      "Switzerland", "Portugal", "Netherlands", "Belgium", "Poland", "NewZealand", 
      "SouthKorea", "Indonesia", "Thailand", "Vietnam", "Philippines", "Nigeria", 
      "Kenya", "Chile", "Colombia", "Peru", "Chile"
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

  const initializeGame = () => {
    displayOptions();
    initializer();
  };

  elements.newGameButton.addEventListener("click", initializeGame);
  initializeGame();  // Call this when page loads
});

