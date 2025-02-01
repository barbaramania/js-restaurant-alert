let playerName;
let choice;
let introText = "Are you hungry?\nI hope so!\nWhere are you right now?\nSeattle or Bellevue";
let pathText1 = "Ok, so in Seattle, you can go to:\n1. Canlis\n2. The Pink Door\n3. The Walrus and the Carpenter\n4. Matt's in the Market\n5. Pike Place Chowder\nWhich one do you like the most?"
const locationsSeattle = {
    "1": "2576 Aurora Ave N, Seattle, WA 98109", // Canlis
    "2": "1919 Post Alley, Seattle, WA 98101", // The Pink Door
    "3": "4743 Ballard Ave NW, Seattle, WA 98107", // The Walrus and the Carpenter
    "4": "94 Pike St, Seattle, WA 98101", // Matt's in the Market
    "5": "1530 Post Alley, Seattle, WA 98101" // Pike Place Chowder
}

let pathText2 = "Ok, so in Bellevue, you can go to:\n1. Seastar Restaurant & Raw Bar\n2. Ascend Prime Steak & Sushi\n3. Monsoon Bellevue\n4. Cantinetta Bellevue\n5. La Mar Bellevue\nWhich one do you like the most?"
const locationsBellevue = {
    "1": "205 108th Ave NE, Bellevue, WA 98004", // Seastar Restaurant & Raw Bar
    "2": "10400 NE 4th St, Bellevue, WA 98004", // Ascend Prime Steak & Sushi
    "3": "10245 Main St, Bellevue, WA 98004", // Monsoon Bellevue
    "4": "10038 Main St, Bellevue, WA 98004", // Cantinetta Bellevue
    "5": "500 Bellevue Way NE, Bellevue, WA 98004" // La Mar Bellevue
}

let pathText3 = "Sorry, I don't know any restaurants there";

let pathText4 = "Did you find a perfect place?\nYes or No";
let bonus = "No worries. I have a bonus list for you:\n1. Monsoon Bellevue\n2. Facing East\n3. Din Tai Fung "
let bonusLocations = {
    1: "10245 Main St, Bellevue, WA 98004",
    2: "1075 Bellevue Way NE B-2, Bellevue, WA 98004",
    3: "700 Bellevue Way NE #280, Bellevue, WA 98004"
};

let endText = "~~Have a tasty day!~~";