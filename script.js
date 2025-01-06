const dice1 = document.createElement('img');
dice1.src = 'dice1.png';
const dice2 = document.createElement('img');
dice2.src = 'dice2.png';
const dice3 = document.createElement('img');
dice3.src = 'dice3.png';
const dice4 = document.createElement('img');
dice4.src = 'dice4.png';
const dice5 = document.createElement('img');
dice5.src = 'dice5.png';
const dice6 = document.createElement('img');
dice6.src = 'dice6.png';

rollBtn = document.querySelector('.roll-button');
resultList = document.querySelector('.dice-list');

let listResultsArray = [];
let roll = 0;

function rollDice() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  if (randomNumber === 1) {
    roll++;
    let li = document.createElement('li');
    li.innerHTML = `Roll ${roll} is:   ${dice1.outerHTML}`;
    listResultsArray.push(li);
    resultList.appendChild(listResultsArray[roll - 1]);
    return roll;
  } else if (randomNumber === 2) {
    roll++;
    let li = document.createElement('li');
    li.innerHTML = `Roll ${roll} is:   ${dice2.outerHTML}`;
    listResultsArray.push(li);
    resultList.appendChild(listResultsArray[roll - 1]);
    return roll;
  } else if (randomNumber === 3) {
    roll++;
    let li = document.createElement('li');
    li.innerHTML = `Roll ${roll} is:   ${dice3.outerHTML}`;
    listResultsArray.push(li);
    resultList.appendChild(listResultsArray[roll - 1]);
    return roll;
  } else if (randomNumber === 4) {
    roll++;
    let li = document.createElement('li');
    li.innerHTML = `Roll ${roll} is: ${dice4.outerHTML}`;
    listResultsArray.push(li);
    resultList.appendChild(listResultsArray[roll - 1]);
    return roll;
  } else if (randomNumber === 5) {
    roll++;
    let li = document.createElement('li');
    li.innerHTML = `Roll ${roll} is:   ${dice5.outerHTML}`;
    listResultsArray.push(li);
    resultList.appendChild(listResultsArray[roll - 1]);
    return roll;
  } else if (randomNumber === 6) {
    roll++;
    let li = document.createElement('li');
    li.innerHTML = `Roll ${roll} is:   ${dice6.outerHTML}`;
    listResultsArray.push(li);
    resultList.appendChild(listResultsArray[roll - 1]);
    return roll;
  }
}

rollBtn.addEventListener('click', rollDice);

