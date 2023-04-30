const dropdown = document.getElementById("subject-dropdown");
		const startButton = document.getElementById("start-button");

		// enable start button when a subject is selected
		dropdown.addEventListener("change", () => {
			startButton.disabled = false;
		});

		// redirect to selected subject on start button click
		startButton.addEventListener("click", () => {
			const selectedSubject = dropdown.value;
			if (selectedSubject !== "") {
				window.location.href = selectedSubject;
			}
		});