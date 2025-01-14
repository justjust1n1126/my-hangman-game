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
  ],
  movies: [
    "Inception", "Avatar", "Titanic", "TheLionKing", "Frozen", "TheAvengers", 
    "JurassicPark", "HarryPotter", "StarWars", "TheDarkKnight", "PulpFiction",
    "ForrestGump", "TheGodfather", "TheMatrix", "Shrek", "ToyStory", "FindingNemo", 
    "Gladiator", "TheShawshankRedemption", "TheSocialNetwork", "LaLaLand", 
    "BlackPanther", "ThePursuitOfHappyness", "TheWolfOfWallStreet", "Deadpool", 
    "GuardiansOfTheGalaxy", "PiratesOfTheCaribbean", "Jaws", "Rocky", "Memento", 
    "TheSilenceOfTheLambs", "TheIncredibles", "Avatar", "Coco", "TheLionKing", 
    "BeautyAndTheBeast", "MadMax", "TheHungerGames", "Borat", "TheGodfather"
  ],
  sports: [
    "Football", "Basketball", "Soccer", "Tennis", "Baseball", "Hockey", "Golf",
    "Swimming", "Cycling", "Running", "Boxing", "Wrestling", "Cricket", "Rugby",
    "Badminton", "Volleyball", "TableTennis", "Handball", "Gymnastics", "Fencing",
    "Karate", "Judo", "MMA", "Surfing", "Skiing", "Snowboarding", "Equestrian",
    "Archery", "Lacrosse", "Softball", "FieldHockey", "TrackAndField", "Weightlifting",
    "Shooting", "HorseRacing", "Curling", "Motorsports", "Swimming", "TugOfWar",
    "UltimateFrisbee", "Cycling"
  ],
  landmarks: [
    "EiffelTower", "GreatWallOfChina", "TajMahal", "PyramidsOfGiza", "StatueOfLiberty",
    "SydneyOperaHouse", "MachuPicchu", "BigBen", "MountFuji", "Colosseum", 
    "ChristTheRedeemer", "MountRushmore", "Stonehenge", "NeuschwansteinCastle",
    "Stonehenge", "GrandCanyon", "GreatBarrierReef", "MountEverest", "GoldenGateBridge",
    "Acropolis", "SagradaFamilia", "RedSquare", "BurjKhalifa", "Petra", "MountVesuvius",
    "Alhambra", "ChichenItza", "PisaTower", "MachuPicchu", "StPeter'sBasilica", 
    "AngkorWat", "GrandPalace", "MountKilimanjiro", "Fallingwater", "FountainOfTrev",
    "WhiteHouse", "MontSaintMichel", "BlueLagoon", "MountEtna"
  ],
  superheroes: [
    "Superman", "Batman", "SpiderMan", "WonderWoman", "IronMan", "CaptainAmerica",
    "Thor", "BlackPanther", "Hulk", "Flash", "Aquaman", "GreenLantern", "Deadpool", 
    "BlackWidow", "DoctorStrange", "ScarletWitch", "Hawkeye", "AntMan", "LukeCage", 
    "JessicaJones", "Daredevil", "ThePunisher", "Wolverine", "Storm", "Cyclops", 
    "Beast", "JeanGrey", "ProfessorX", "Gambit", "Quicksilver", "Vision", 
    "Wasp", "RocketRaccoon", "Gamora", "StarLord", "Shazam", "Deadpool", "Spawn", 
    "CaptainMarvel", "GhostRider", "GreenArrow", "Blade", "MoonKnight"
  ],
  celebrities: [
    "TaylorSwift", "KylieJenner", "Beyoncé", "Rihanna", "JustinBieber", "KanyeWest",
    "OprahWinfrey", "TomHanks", "WillSmith", "LeonardoDiCaprio", "AngelinaJolie",
    "BradPitt", "GeorgeClooney", "Adele", "MileyCyrus", "EmmaStone", "JohnnyDepp", 
    "DwayneJohnson", "SelenaGomez", "KimKardashian", "ZaynMalik", "ChrisHemsworth", 
    "DemiLovato", "Shakira", "LadyGaga", "JenniferAniston", "HughJackman", "GigiHadid", 
    "EllenDeGeneres", "KristenStewart", "ScarlettJohansson", "ZacEfron", "DakotaJohnson", 
    "MatthewMcConaughey", "RyanReynolds", "TomCruise", "SandraBullock", "KeanuReeves", 
    "CharlizeTheron", "JLo", "KendallJenner", "MarilynMonroe"
  ],
  tvShows: [
    "Friends", "TheOffice", "BreakingBad", "GameOfThrones", "StrangerThings",
    "TheSimpsons", "TheBigBangTheory", "Narcos", "Sherlock", "GreyAnatomy",
    "HowIMetYourMother", "ModernFamily", "MoneyHeist", "TheWalkingDead", "Fargo",
    "PeakyBlinders", "TheCrown", "TheMandolorian", "Bridgerton", "TheWestWing", 
    "NarcosMexico", "TheUmbrellaAcademy", "TheChillingAdventuresOfSabrina", "Dark", 
    "GLOW", "Lucifer", "TheGoodPlace", "Community", "TheHauntingOfHillHouse", "Mindhunter", 
    "Vikings", "TheOfficeUS", "Chernobyl", "BlackMirror", "FriendsReunion", 
    "HouseOfCards", "AmericanHorrorStory", "Suits", "TheBoys", "KillingEve"
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
    button.classList.add("option-btn", "animate__animated", "animate__fadeIn");
    button.addEventListener("click", () => {
      generateWord(option);
      button.classList.add("animate__bounceOut"); // Adds an animation when a category is selected
    });
    elements.optionsButtons.appendChild(button);
  });
};

const blocker = () => {
  let letterButtons = document.querySelectorAll(".letters");
  letterButtons.forEach((button) => {
    button.disabled = true;
    button.classList.add("animate__animated", "animate__fadeOut");
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
    button.classList.add("letters", "animate__animated", "animate__fadeIn");
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
              elements.resultText.innerHTML = `<h2 class='win-msg animate__animated animate__fadeIn'>You Win!!</h2><p>The word was <span>${chosenWord}</span></p>`;
              blocker();
            }
          }
        });
      } else {
        count += 1;
        if (count == 6) {
          elements.resultText.innerHTML = `<h2 class='lose-msg animate__animated animate__fadeIn'>You Lose!!</h2><p>The word was <span>${chosenWord}</span></p>`;
          blocker();
        }
      }
      button.disabled = true;
      button.classList.add("animate__animated", "animate__fadeOut");
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
window.onload = initializeGame;
