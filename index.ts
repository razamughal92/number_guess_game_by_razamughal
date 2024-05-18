#!/usr/bin/env node
// Coded by Raza Mughal
// Import necessary libraries
import inquirer from "inquirer"; // Used to prompt the user for input.
import chalk from "chalk"; // Used to add colors to the console output.

// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 9 + 1);

// Prompt the user to guess a number
const getUserGuess = async () => {
  const answers = await inquirer.prompt([
    {
      name: "userGuessedNumber",
      type: "number",
      message: "Please guess a number in between 1 and 9: ",
    },
  ]);
  return answers.userGuessedNumber;
};

// Check if the user's guess is correct
const checkGuess = (userGuess: any, randomNumber: any) => {
  if (userGuess === randomNumber) {
    console.log(chalk.blue("Congratulations! You guessed the right number."));
  } else {
    console.log(chalk.red("Sorry, you guessed the wrong number."));
    console.log(chalk.yellow(`The correct number was ${randomNumber}.`));
  }
};

// Main function to run the game
const main = async () => {
  const userGuess = await getUserGuess();
  checkGuess(userGuess, randomNumber);
};

// Run the main function
main();


// ************** End of Programme **************