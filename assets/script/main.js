// choice buttons
const userRock = document.querySelector("#userRock"); 
const userPaper = document.querySelector("#userPaper");
const userScissors = document.querySelector("#userScissors"); 
let userChoice;

// reset btn 
const resetBtn = document.querySelector("#reset");

// buttons event listeners
userRock.addEventListener("click", chooseRock);
userPaper.addEventListener("click", choosePaper);
userScissors.addEventListener("click", chooseScissors)

// choice displays
// user
const userDisplayRock = document.querySelector("#userDisplayRock");
const userDisplayPaper = document.querySelector("#userDisplayPaper");
const userDisplayScissors = document.querySelector("#userDisplayScissors");

// ai
const aiDisplayRock = document.querySelector("#aiDisplayRock");
const aiDisplayPaper = document.querySelector("#aiDisplayPaper");
const aiDisplayScissors = document.querySelector("#aiDisplayScissors");

// score 
const userScore = document.querySelector("#userScore");
const aiScore = document.querySelector("#aiScore");

// initialize score
// const userScoreValue = 0;
// const aiScoreValue = 0;
// userScore.innerHTML = userScoreValue;
// aiScore.innerHTML = aiScoreValue;

// Match result container
const matchResult = document.querySelector("#result");

// history div
const matchHistory = document.querySelector(`#matchHistory`);
const matchHistoryHeader = document.querySelector(`#matchHistoryHeader`);

let score1 = 0
let score2 = 0

// user chose rock function
function chooseRock () {
// ai choice randomizer where : 0 = rock, 1 = paper, 2 = scissors
const aiRandom = Math.floor((Math.random() * 3));

// initialize score
// userScore.innerHTML = userScoreValue;
// aiScore.innerHTML = aiScoreValue;
// makes choice visible
userDisplayRock.setAttribute('style', 'display: block ;');
userDisplayPaper.setAttribute('style', 'display: none ;');
userDisplayScissors.setAttribute('style', 'display: none ;');
if (aiRandom == 0) {
  

  aiDisplayRock.setAttribute('style', 'display: block ;');
  aiDisplayPaper.setAttribute('style', 'display: none ;');
  aiDisplayScissors.setAttribute('style', 'display: none ;');

  matchResult.innerHTML = "DRAW";
  matchResult.style.textShadow = "0 0 5px #5ED974";
  matchResult.style.color = "#5ED974";

  // create element
//   const loseHistory = document.createElement(`div`);
//   const loseHistoryPlayerPick = document.createElement(`div`);
//   const loseHistoryResult = document.createElement(`div`)
//   const loseHistoryAIPick = document.createElement(`div`);

  // append
    // history-draw content
    // loseHistory.appendChild(loseHistoryPlayerPick);
    // loseHistory.appendChild(loseHistoryResult);
    // loseHistory.appendChild(loseHistoryAIPick);

  // div attrributes
//   loseHistory.classList.add(`history-draw`);

  // div content
//   loseHistoryPlayerPick.innerHTML = `<i class="fa-solid fa-hand-back-fist history-icon-size"></i>`;
//   loseHistoryResult.innerHTML = `<p class="history-draw-message">DRAW</p>`;
//   loseHistoryAIPick.innerHTML = `<i class="fa-solid fa-hand-back-fist history-icon-size"></i>`

  
  matchHistory.insertAdjacentHTML("afterbegin",`<div><i class="fa-solid fa-hand-back-fist history-icon-size"></i><p class="history-draw-message">DRAW</p><i class="fa-solid fa-hand-back-fist history-icon-size"></i></div>`);

  return ;

}else if (aiRandom == 1) {

  aiDisplayPaper.setAttribute('style', 'display: block ;');
  aiDisplayRock.setAttribute('style', 'display: none ;');
  aiDisplayScissors.setAttribute('style', 'display: none ;');
  score2 ++ 
  aiScore.innerHTML =score2
  matchResult.innerHTML = "YOU LOSE";
  matchResult.style.textShadow = "0 0 5px #f04343";
  matchResult.style.color = "#f04343";
//   aiScoreValue++;
  
  // create element
//   const loseHistory = document.createElement(`div`);
//   const loseHistoryPlayerPick = document.createElement(`div`);
//   const loseHistoryResult = document.createElement(`div`)
//   const loseHistoryAIPick = document.createElement(`div`);

  // append
  // history-draw content
//   loseHistory.appendChild(loseHistoryPlayerPick);
//     loseHistory.appendChild(loseHistoryResult);
//     loseHistory.appendChild(loseHistoryAIPick);
    
    // div attrributes
    // loseHistory.classList.add(`history-lose`);
    
  // div content
//   loseHistoryPlayerPick.innerHTML = `<i class="fa-solid fa-hand-back-fist history-icon-size"></i>`;
//   loseHistoryResult.innerHTML = `<p class="history-lose-message">LOSE</p>`;
//   loseHistoryAIPick.innerHTML = `<i class="fa-solid fa-hand history-icon-size"></i>`
//   matchHistory.insertAdjacentElement("afterbegin",`<div>${loseHistoryPlayerPick}${loseHistoryResult}${loseHistoryAIPick}</div>`);

  matchHistory.insertAdjacentHTML("afterbegin",`<div>
  <i class="fa-solid fa-hand-back-fist history-icon-size"></i>
  <p class="history-lose-message">LOSE</p>
  <i class="fa-solid fa-hand history-icon-size"></i>
  </div>`);

}else if (aiRandom == 2) {

  aiDisplayScissors.setAttribute('style', 'display: block ;');
  aiDisplayPaper.setAttribute('style', 'display: none ;');
  aiDisplayRock.setAttribute('style', 'display: none ;');
  score1 ++ 
  userScore.innerHTML =score1
  matchResult.innerHTML = "YOU WIN!";
  matchResult.style.textShadow = "0 0 5px #5549fd";
  matchResult.style.color = "#5549fd";
//   userScoreValue++;

  // create element
//   const loseHistory = document.createElement(`div`);
//   const loseHistoryPlayerPick = document.createElement(`div`);
//   const loseHistoryResult = document.createElement(`div`)
//   const loseHistoryAIPick = document.createElement(`div`);
//   userScoreValue ++
  // append
    // history-draw content
    // loseHistory.appendChild(loseHistoryPlayerPick);
    // loseHistory.appendChild(loseHistoryResult);
    // loseHistory.appendChild(loseHistoryAIPick);

  // div attrributes
//   loseHistory.classList.add(`history-win`);

  // div content
//   loseHistoryPlayerPick.innerHTML = `<i class="fa-solid fa-hand-back-fist history-icon-size"></i>`;
//   loseHistoryResult.innerHTML = `<p class="history-win-message">WIN</p>`;
//   loseHistoryAIPick.innerHTML = `<i class="fa-solid fa-hand-scissors  fa-rotate-90 history-icon-size"></i>`
//   matchHistory.insertAdjacentElement("afterbegin",`<div>${loseHistoryPlayerPick}${loseHistoryResult}${loseHistoryAIPick}</div>`);

  matchHistory.insertAdjacentHTML("afterbegin",`<div><i class="fa-solid fa-hand-back-fist history-icon-size"></i><p class="history-win-message">WIN</p><i class="fa-solid fa-hand-scissors  fa-rotate-90 history-icon-size"></i>`);
} 
}
function choosePaper (){
// ai choice randomizer where : 0 = rock, 1 = paper, 2 = scissors
const aiRandom = Math.floor((Math.random() * 3));

// initialize score
// userScore.innerHTML = userScoreValue;
// aiScore.innerHTML = aiScoreValue;
// makes choice visible
userDisplayPaper.setAttribute('style', 'display: block ;');
userDisplayRock.setAttribute('style', 'display: none ;');
userDisplayScissors.setAttribute('style', 'display: none ;');

if (aiRandom == 1) {

    aiDisplayPaper.setAttribute('style', 'display: block ;');
    aiDisplayRock.setAttribute('style', 'display: none ;');
  aiDisplayScissors.setAttribute('style', 'display: none ;');

  matchResult.innerHTML = "DRAW";
  matchResult.style.textShadow = "0 0 5px #5ED974"
  matchResult.style.color = "#5ED974"

  // create element
//   const loseHistory = document.createElement(`div`);
//   const loseHistoryPlayerPick = document.createElement(`div`);
//   const loseHistoryResult = document.createElement(`div`)
//   const loseHistoryAIPick = document.createElement(`div`);

  // append
//   matchHistory.appendChild(loseHistory);
    // history-draw content
    // loseHistory.appendChild(loseHistoryPlayerPick);
    // loseHistory.appendChild(loseHistoryResult);
    // loseHistory.appendChild(loseHistoryAIPick);

  // div attrributes
//   loseHistory.classList.add(`history-draw`);

  // div content
//   loseHistoryPlayerPick.innerHTML = `<i class="fa-solid fa-hand history-icon-size"></i>`;
//   loseHistoryResult.innerHTML = `<p class="history-draw-message">DRAW</p>`;
//   loseHistoryAIPick.innerHTML = `<i class="fa-solid fa-hand history-icon-size"></i>`

  matchHistory.insertAdjacentHTML("afterbegin",`<div><i class="fa-solid fa-hand history-icon-size"></i><p class="history-draw-message">DRAW</p><i class="fa-solid fa-hand history-icon-size"></i></div>`);
}else if (aiRandom == 2) {

  aiDisplayScissors.setAttribute('style', 'display: block ;');
  aiDisplayPaper.setAttribute('style', 'display: none ;');
  aiDisplayRock.setAttribute('style', 'display: none ;');
  score2 ++ 
  aiScore.innerHTML =score2
  matchResult.innerHTML = "YOU LOSE";
  matchResult.style.textShadow = "0 0 5px #f04343"
  matchResult.style.color = "#f04343"
//   aiScoreValue++;
  
  // create element
  const loseHistory = document.createElement(`div`);
  const loseHistoryPlayerPick = document.createElement(`div`);
  const loseHistoryResult = document.createElement(`div`)
  const loseHistoryAIPick = document.createElement(`div`);

  // append
//   matchHistory.appendChild(loseHistory);
    // history-draw content
    // loseHistory.appendChild(loseHistoryPlayerPick);
    // loseHistory.appendChild(loseHistoryResult);
    // loseHistory.appendChild(loseHistoryAIPick);

  // div attrributes
//   loseHistory.classList.add(`history-lose`);

  // div content
//   loseHistoryPlayerPick.innerHTML = `<i class="fa-solid fa-hand history-icon-size"></i>`;
//   loseHistoryResult.innerHTML = `<p class="history-lose-message">LOSE</p>`;
//   loseHistoryAIPick.innerHTML = `<i class="fa-solid fa-hand-scissors  fa-rotate-90 history-icon-size"></i>`

  matchHistory.insertAdjacentHTML("afterbegin",`<div><i class="fa-solid fa-hand history-icon-size"></i><p class="history-lose-message">LOSE</p><i class="fa-solid fa-hand-scissors  fa-rotate-90 history-icon-size"></i></div>`);
}else if (aiRandom == 0) {

  aiDisplayRock.setAttribute('style', 'display: block ;');
  aiDisplayScissors.setAttribute('style', 'display: none ;');
  aiDisplayPaper.setAttribute('style', 'display: none ;');
  score1 ++ 
  userScore.innerHTML =score1
  matchResult.innerHTML = "YOU WIN!";
  matchResult.style.textShadow = "0 0 5px #5549fd"
  matchResult.style.color = "#5549fd"
//   userScoreValue++;

  // create element
  const loseHistory = document.createElement(`div`);
  const loseHistoryPlayerPick = document.createElement(`div`);
  const loseHistoryResult = document.createElement(`div`)
  const loseHistoryAIPick = document.createElement(`div`);

  // append
//   matchHistory.appendChild(loseHistory);
    // history-draw content
    // loseHistory.appendChild(loseHistoryPlayerPick);
    // loseHistory.appendChild(loseHistoryResult);
    // loseHistory.appendChild(loseHistoryAIPick);

  // div attrributes
//   loseHistory.classList.add(`history-win`);

  // div content
//   loseHistoryPlayerPick.innerHTML = `<i class="fa-solid fa-hand history-icon-size"></i>`;
//   loseHistoryResult.innerHTML = `<p class="history-win-message">WIN</p>`;
//   loseHistoryAIPick.innerHTML = `<i class="fa-solid fa-hand-back-fist history-icon-size"></i>`

  matchHistory.insertAdjacentHTML("afterbegin",`<div><i class="fa-solid fa-hand history-icon-size"></i><p class="history-win-message">WIN</p><i class="fa-solid fa-hand-back-fist history-icon-size"></i></div>`);
} 
}
function chooseScissors () {

// ai choice randomizer where : 0 = rock, 1 = paper, 2 = scissors
let aiRandom = Math.floor((Math.random() * 3));

// initialize score
// userScore.innerHTML = userScoreValue;
// aiScore.innerHTML = aiScoreValue;
// makes choice visible
userDisplayScissors.setAttribute('style', 'display: block ;  transform: rotate(90deg);');
userDisplayPaper.setAttribute('style', 'display: none ;');
userDisplayRock.setAttribute('style', 'display: none ;');

if (aiRandom == 2) {

  aiDisplayScissors.setAttribute('style', 'display: block ;');
  aiDisplayPaper.setAttribute('style', 'display: none ;');
  aiDisplayRock.setAttribute('style', 'display: none ;');

  matchResult.innerHTML = "DRAW";
  matchResult.style.textShadow = "0 0 5px #5ED974"
  matchResult.style.color = "#5ED974"

  // create element
//   const losehistory = document.createelement(`div`);
//   const losehistoryplayerpick = document.createelement(`div`);
//   const losehistoryresult = document.createelement(`div`)
//   const losehistoryaipick = document.createelement(`div`);

  // append
//   matchHistory.appendChild(loseHistory);
    // history-draw content
    // loseHistory.appendChild(loseHistoryPlayerPick);
    // loseHistory.appendChild(loseHistoryResult);
    // loseHistory.appendChild(loseHistoryAIPick);

  // div attrributes
//   loseHistory.classList.add(`history-draw`);

  // div content
//   loseHistoryPlayerPick.innerHTML = `<i class="fa-solid fa-hand-scissors  fa-rotate-90 history-icon-size"></i>`;
//   loseHistoryResult.innerHTML = `<p class="history-draw-message">DRAW</p>`;
//   loseHistoryAIPick.innerHTML = `<i class="fa-solid fa-hand-scissors  fa-rotate-90 history-icon-size"></i>`

 
  matchHistory.insertAdjacentHTML("afterbegin",`<div><i class="fa-solid fa-hand-scissors  fa-rotate-90 history-icon-size"></i><p class="history-draw-message">DRAW</p><i class="fa-solid fa-hand-scissors  fa-rotate-90 history-icon-size"></i></div>`);
}else if (aiRandom == 0) {

  aiDisplayRock.setAttribute('style', 'display: block ;');
  aiDisplayScissors.setAttribute('style', 'display: none ;');
  aiDisplayPaper.setAttribute('style', 'display: none ;');
  score2 ++
  aiScore.innerHTML = score2;
  // aiScore.innerHTML = aiScoreValue;
  matchResult.innerHTML = "YOU LOSE";
  matchResult.style.textShadow = "0 0 5px #f04343"
  matchResult.style.color = "#f04343"
//   aiScoreValue++;

  // create element
  /* 
  const loseHistory = document.createElement(`div`);
  const loseHistoryPlayerPick = document.createElement(`div`);
  const loseHistoryResult = document.createElement(`div`)
  const loseHistoryAIPick = document.createElement(`div`);

  // append
  matchHistory.appendChild(loseHistory);
    // history-draw content
    loseHistory.appendChild(loseHistoryPlayerPick);
    loseHistory.appendChild(loseHistoryResult);
    loseHistory.appendChild(loseHistoryAIPick);

  // div attrributes
  loseHistory.classList.add(`history-lose`);

  // div content
  loseHistoryPlayerPick.innerHTML = `<i class="fa-solid fa-hand-scissors  fa-rotate-90 history-icon-size"></i>`;
  loseHistoryResult.innerHTML = `<p class="history-lose-message">LOSE</p>`;
  loseHistoryAIPick.innerHTML = `<i class="fa-solid fa-hand-back-fist history-icon-size"></i>`
  */
  
  matchHistory.insertAdjacentHTML("afterbegin",`<div><i class="fa-solid fa-hand-scissors  fa-rotate-90 history-icon-size"></i><p class="history-lose-message">LOSE</p><i class="fa-solid fa-hand-back-fist history-icon-size"></i></div>`);
}else if (aiRandom == 1) {
  
  aiDisplayPaper.setAttribute('style', 'display: block ;'); 
  aiDisplayRock.setAttribute('style', 'display: none ;'); 
  aiDisplayScissors.setAttribute('style', 'display: none ;'); 

  matchResult.innerHTML = "YOU WIN!"; 
  matchResult.style.textShadow = "0 0 5px #5549fd"; 
  matchResult.style.color = "#5549fd"; 

  score1 ++
  userScore.innerHTML = score1;
  /*
  userScoreValue++; 

  // create element
  const loseHistory = document.createElement(`div`);
  const loseHistoryPlayerPick = document.createElement(`div`);
  const loseHistoryResult = document.createElement(`div`)
  const loseHistoryAIPick = document.createElement(`div`);

  // append
  matchHistory.appendChild(loseHistory);
    // history-draw content
    loseHistory.appendChild(loseHistoryPlayerPick);
    loseHistory.appendChild(loseHistoryResult);
    loseHistory.appendChild(loseHistoryAIPick);

  // div attrributes
  loseHistory.classList.add(`history-win`);

  // div content
  loseHistoryPlayerPick.innerHTML = `<i class="fa-solid fa-hand-scissors  fa-rotate-90 history-icon-size"></i>`;
  loseHistoryResult.innerHTML = `<p class="history-win-message">WIN</p>`;
  loseHistoryAIPick.innerHTML = `<i class="fa-solid fa-hand history-icon-size"></i>`
 */ 

  matchHistory.insertAdjacentHTML("afterbegin",`<div><i class="fa-solid fa-hand-scissors  fa-rotate-90 history-icon-size"></i><p class="history-win-message">WIN</p><i class="fa-solid fa-hand history-icon-size"></i></div>`);
} 
}
function reloadPage(){
location.reload();
}