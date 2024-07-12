/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
const billInput = document.querySelector("#billTotalInput");
const tipInput = document.querySelector("#tipInput");
const numberOfPeopleDiv = document.querySelector("#numberOfPeople");
const perPersonTotal = document.querySelector("#perPersonTotal");
const Error = document.getElementById("Error");
// console.log(numberOfPeopleDiv.innerText)

// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText);

// ** Calculate the total bill per person **
const calculateBill = () => {
  //! console.log(billInput.value)

  // get bill from user input & convert it into a number
  const bill = Number(billInput.value);

  // get the tip from user & convert it into a percentage (divide by 100)
  const tipPercentage = Number(tipInput.value) / 100;

  // get the total tip amount
  const tipAmount = bill * tipPercentage;
  // calculate the total (tip amount + bill)
  const total = bill + tipAmount;
  // console.log(total)

  // calculate the per person total (total divided by number of people)
  const perPerson = total / Number(numberOfPeopleDiv.innerText);
  // console.log(perPersonTotal)
  // update the perPersonTotal on DOM & show it to user
  perPersonTotal.innerText = perPerson.toFixed(2);
};

// ** Splits the bill between more people **
const increasePeople = () => {
    Error.innerText = "";
    // increment the amount of people
  numberOfPeopleDiv.innerText++;
  // console.log(perPersonTotal.innerText*=numberOfPeopleDiv.innerText--)
  // update the DOM with the new number of people

  // calculate the bill based on the new number of people
  let result = perPersonTotal.innerText *(Number(numberOfPeopleDiv.innerText) - 1) / numberOfPeopleDiv.innerText;
  perPersonTotal.innerText = result.toFixed(2)
};

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)

  if (numberOfPeopleDiv.innerText === '1') {
    Error.innerText = "Error: you con't divide by zero";
  } else {
    Error.innerText = "";
    // decrement the amount of people
    numberOfPeopleDiv.innerText--;

    // update the DOM with the new number of people

    // calculate the bill based on the new number of people
    let result = perPersonTotal.innerText *(Number(numberOfPeopleDiv.innerText) + 1) / numberOfPeopleDiv.innerText;
    perPersonTotal.innerText = result.toFixed(2)
  }
};
