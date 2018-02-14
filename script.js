var hour = document.querySelector('.hour'),
	min = document.querySelector('.min'),
	second = document.querySelector('.second');

function setDate() {
	var now = new Date(),
		seconds = now.getSeconds(),
		mins = now.getMinutes(),
		hours = now.getHours(),
		secondsDegrees = ((seconds / 60) * 360) + 90,
		minutesDegrees = ((mins / 60) * 360) + 90,
		hoursDegrees = ((hours / 12) * 360) + 90;
		
	second.style.transform = `rotate(${secondsDegrees}deg)`;
	min.style.transform = `rotate(${minutesDegrees}deg)`;
	hour.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);