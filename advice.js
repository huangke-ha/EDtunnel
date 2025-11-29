/**
 * Fetches advice from the Bored API and logs it to the console
 * @returns {Promise<void>}
 */
async function getAdvice() {
	try {
		const response = await fetch('https://www.boredapi.com/api/activity/');
		const data = await response.json();
		const activity = data.activity;
		console.log(activity);
	} catch (error) {
		console.error('Error fetching advice:', error);
	}
}

export { getAdvice };
