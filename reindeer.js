var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var hohohoElement = document.getElementById("reindeer");

for (let loopTracker = 0; loopTracker < reindeer.length; loopTracker += 1) {
    const reindeerWithColors = colors[loopTracker] + " " + reindeer[loopTracker];
    hohohoElement.innerHTML += `<li>${reindeerWithColors}</li>`;
}