export function observeAuctions(callback) {
	const intersectionCallback = (entries) => {

		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				console.log(`Intersecting here`);
				callback();

				if (callback.stopObserving === true) {
					observer.unobserve(target);
				}
			}
		});
	};

	const observer = new IntersectionObserver(intersectionCallback);
	const target = document.querySelector("#auction-end");
	observer.observe(target);
}
