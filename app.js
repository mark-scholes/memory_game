const cards = [
  { name: "Ripley", image: "images/5e5dcfa5d4d9e61312bec3a021072685.jpeg" },
  { name: "Ripley", image: "images/5e5dcfa5d4d9e61312bec3a021072685.jpeg" },
  {
    name: "Alien_isolation",
    image: "images/alien_isolation.jpg",
  },
  {
    name: "Alien_isolation",
    image: "images/alien_isolation.jpg",
  },
  { name: "giger_xenomorph", image: "images/alien.jpg" },
  { name: "giger_xenomorph", image: "images/alien.jpg" },
  { name: "alien_covernant", image: "images/covenant.jpg" },
  { name: "alien_covernant", image: "images/covenant.jpg" },
  {
    name: "egg",
    image: "images/D4NlGIR9TQmfm1kTUK0j-PFM7ktP2KpgKt2EG-xqKTo.png",
  },
  {
    name: "egg",
    image: "images/D4NlGIR9TQmfm1kTUK0j-PFM7ktP2KpgKt2EG-xqKTo.png",
  },
  { name: "xenomorph", image: "images/IM8hOIC.jpg" },
  { name: "xenomorph", image: "images/IM8hOIC.jpg" },
  { name: "bullet_baby", image: "images/images.jpg" },
  { name: "bullet_baby", image: "images/images.jpg" },
  { name: "xenomorph_face", image: "images/vfAFwnTF_400x400.jpg" },
  { name: "xenomorph_face", image: "images/vfAFwnTF_400x400.jpg" },
];

// setting up the game board

cards.sort(() => 0.5 - Math.random());

const grid = document.getElementById("grid");

const resultsDisplay = document.getElementById("result");
let cardsChosen = [];
let cardsChosenId = [];
let cardsFound = [];

createBoard = () => {
  for (let i = 0; i < cards.length; i++) {
    let card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("id", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
};

checkForMatch = () => {
  let allCards = document.querySelectorAll("img");
  const optionOne = cardsChosen[0];
  const optionTwo = cardsChosen[1];

  if (cardsChosen[0] === cardsChosen[1]) {
    alert("You found a match");
    document
      .getElementById(cardsChosenId[0])
      .setAttribute("src", "images/white.png");
    document
      .getElementById(cardsChosenId[1])
      .setAttribute("src", "images/white.png");
    cardsFound.push(cardsChosen);
  } else {
    allCards[cardsChosenId[0]].setAttribute("src", "images/blank.png");
    allCards[cardsChosenId[1]].setAttribute("src", "images/blank.png");
    alert("Sorry try again");
  }
  cardsChosenId = [];
  cardsChosen = [];
  resultsDisplay.textContent = cardsFound.length;
  if (cardsFound.length === cards.length / 2) {
    resultsDisplay.textContent = "Well done, you found all the matches";
  }
};

flipCard = (e) => {
  let cardId = e.target.id;
  cardsChosen.push(cards[cardId].name);
  cardsChosenId.push(cardId);
  e.target.setAttribute("src", cards[cardId].image);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
};

createBoard();
