export function toggleLoadingIndicator(target) {
	let container = target;

	if (typeof target === "string") {
		container = document.querySelector(target);
	}

	const indicator = container.querySelector("#loading");

	if (indicator) {
		container.removeChild(indicator);
	} else {
		const newIndicator = document.createElement("div");
		newIndicator.id = "loading";
		newIndicator.textContent = "Loading...";
		container.appendChild(newIndicator);
	}
}