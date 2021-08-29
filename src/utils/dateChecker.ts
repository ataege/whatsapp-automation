export function checkDate(date: string) {
	const currentDate = new Date();
	const dateToCheck = new Date(date);
	return (
		currentDate.getSeconds() === dateToCheck.getSeconds() &&
		currentDate.getMinutes() === dateToCheck.getMinutes() &&
		currentDate.getHours() === dateToCheck.getHours() &&
		currentDate.getDate() === dateToCheck.getDate() &&
		currentDate.getFullYear() === dateToCheck.getFullYear()
	);
}
