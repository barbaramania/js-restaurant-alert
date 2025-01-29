// Use prompt() to ask the player
// for their name and store it in the playerName variable.
// Use alert() to greet the player with their name.
// Use prompt() to ask the player questions and make choices.
// Use
// if and
// else if statements to guide the player through the story based on their answers.
// Use alert() to display story text stored in variables from gameData.js.
// Optional: Feel free to use the
// switch statement and / or ternary operator
// for an additional challenge.

playerName = prompt("What is your name?");
alert("Hello  " + playerName + "\n~~Welcome to your find a restaurant app~~");

choice = prompt(introText);
if (choice === "Seattle") {
    alert(pathText1);
} else if (choice === "Bellevue") {
    alert(pathText2);
} else {
    alert(pathText3);
}

choice = prompt("Did you find a perfect place?\nYes or No");
if (choice === "No") {
    alert(bonus);
    alert(endText);
} else {
    alert(endText);
}