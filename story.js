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

if (choice == "Seattle" || choice === "Bellevue") {
    let location = choice === "Seattle" ? pathText1 : pathText2;
    let restaurant = choice === "Seattle" ? locationsSeattle : locationsBellevue;

    restaurantChoice = Number(prompt(location));
    alert("Here is the address for your place:\n" + restaurant[restaurantChoice]);

    if (prompt(pathText4) === "No") {
        let bonusChoice = Number(prompt(bonus));
        alert("Here is the address for your place:\n" + bonusLocations[bonusChoice]);
    }
    alert(endText);
} else {
    alert(pathText3)
}



// 
// if (choice === "Seattle") {
//     let choice = Number(prompt(pathText1));
//     alert("Here is the address for your place:\n" + locationsSeattle[choice]);
//     choice = prompt("Did you find a perfect place?\nYes or No");
//     if (choice === "No") {
//         let choice = Number(prompt(bonus));
//         alert("Here is the address for your place:\n" + bonusLocations[choice]);
//     } else {
//         alert(endText);
//     }
// } else if (choice === "Bellevue") {
//     let choice = Number(prompt(pathText2));
//     alert("Here is the address for your place:\n" + locationsBellevue[choice]);
//     choice = prompt("Did you find a perfect place?\nYes or No");
//     if (choice === "No") {
//         let choice = Number(prompt(bonus));
//         alert("Here is the address for your place:\n" + bonusLocations[choice]);
//         alert(endText);
//     } else {
//         alert(endText);
//     }
// } else {
//     alert(pathText3);
// }