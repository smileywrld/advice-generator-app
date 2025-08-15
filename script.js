window.addEventListener("DOMContentLoaded", fetchData);
const adviceTitle = document.getElementById("advice-id");

const advice = document.getElementById("advice");

const diceBtn = document.querySelector(".dice-btn");

async function fetchData() {
	const response = await fetch("https://api.adviceslip.com/advice");
	const json = await response.json();
	console.log(json);

	adviceTitle.innerText = `Advice # ${json.slip.id}`;

	advice.innerText = json.slip.advice;
}

diceBtn.addEventListener("click", fetchData);
