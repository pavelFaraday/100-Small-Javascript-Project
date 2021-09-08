(() => {
	document.getElementById("message-form").addEventListener("submit", (e) => {
		e.preventDefault();
		let messageInput = document.getElementById("message");
		let messageOutput = document.querySelector(".message-content");
		let alert = document.querySelector(".feedback");

		if (messageInput.value == "") {
			alert.classList.add("show");
			setTimeout(() => {
				alert.classList.remove("show");
			}, 2000);
		} else {
			messageOutput.textContent = messageInput.value;
			messageInput.value = "";
		}
	});
})();
