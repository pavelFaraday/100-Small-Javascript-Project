(() => {
	let buttons = document.querySelectorAll(".counterBtn");
	let count = 0;

	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			if (button.classList.contains("prevBtn")) {
				count--;
			} else if (button.classList.contains("nextBtn")) {
				count++;
			}

			let output = document.getElementById("counter");
			output.textContent = count;

			if (count < 0) {
				output.style.color = "red";
			} else if (count > 0) {
				output.style.color = "green";
			} else {
				output.style.color = "#333333";
			}
		});
	});
})();
