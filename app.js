const cards = [
  { name: "Ripley", image: "images/5e5dcfa5d4d9e61312bec3a021072685.jpeg" },
  { name: "Ripley", image: "images/5e5dcfa5d4d9e61312bec3a021072685.jpeg" },
  {
    name: "Alien_isolation",
    image: "4229e095-401e-45d9-8e9f-9fcc939e86eb.jpg",
  },
  {
    name: "Alien_isolation",
    image: "4229e095-401e-45d9-8e9f-9fcc939e86eb.jpg",
  },
  { name: "giger_xenomorph", image: "alien.jpg" },
  { name: "giger_xenomorph", image: "alien.jpg" },
  { name: "alien_covernant", image: "covenant.jpg" },
  { name: "alien_covernant", image: "covenant.jpg" },
  { name: "egg", image: "D4NlGIR9TQmfm1kTUK0j-PFM7ktP2KpgKt2EG-xqKTo.png" },
  { name: "egg", image: "D4NlGIR9TQmfm1kTUK0j-PFM7ktP2KpgKt2EG-xqKTo.png" },
  { name: "xenomorph", image: "IM8hOIC.jpg" },
  { name: "xenomorph", image: "IM8hOIC.jpg" },
  { name: "bullet_baby", image: "images.jpg" },
  { name: "bullet_baby", image: "images.jpg" },
  { name: "xenomorph_face", image: "vfAFwnTF_400x400.jpg" },
  { name: "xenomorph_face", image: "vfAFwnTF_400x400.jpg" },
];

// setting up the game board

cards.sort(() => 0.5 - Math.random());

const grid = document.querySelector(".grid");
const resultsDisplay = document.querySelector("#result");
let cardChosen = [];
let cardsChosenId = [];
let cardsFound = [];

createBoard = () => {
  for (let i = 0; i < cards.length; i++) {
    let card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
};

checkForMatch = () => {
  let allCards = document.querySelectorAll("img");
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];
  if (cardsChosen[0] === cardsChosen[1]) {
    alert("You found a match");
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optiontwoId].setAttribute("src", "images/white.png");
    cardsFound.push(cardsChosen);
  } else {
    allCards[optionOneId].setAttribute("src", "images/blank.png");
    allCards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("Sorry try again");
  }
  cardsChosenId = [];

  cardsChosen = [];
  resultsDisplay;
};

flipCard = () => {
  let cardId = this.getAttribute("data-id");
  cardChosen.push(cards[cardId.name]);
  cardsChosenId.push(cardId);

  this.setAttribute("src", cards[cardId].img);
  if (cardChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
};

createBoard();
