let button = document.querySelector("#btn");
let hexValue = document.querySelector("#hex-value");
let bodyColor = document.querySelector("body");

let hexCharacters = [
	0,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
];

button.addEventListener("click", () => {
	let hex = "#";

	for (let i = 0; i < 6; i++) {
		let index = Math.floor(Math.random() * hexCharacters.length);
		hex += hexCharacters[index];
	}

	hexValue.textContent = hex;
	bodyColor.style.background = hex;
});
