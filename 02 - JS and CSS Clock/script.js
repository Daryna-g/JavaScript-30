
const secohdHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds / 60) * 360) + 90;
	secohdHand.style.transform = `rotate(${secondsDegrees}deg)`;
	console.log(seconds);

	const minutes = now.getMinutes();
	const minutesDegrees = ((minutes / 60) * 360) + 90;
	minsHand.style.transform = `rotate(${minutesDegrees}deg)`;

	const hour = now.getHours();
	const hourDegrees = ((hour / 12) * 360) + 90;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate, 1000);