window.addEventListener("DOMContentLoaded", fetchData);
const adviceTitle = document.getElementById("advice-id");

const advice = document.getElementById("advice");

const diceBtn = document.querySelector(".dice-btn");

async function fetchData() {
	const response = await fetch("https://api.adviceslip.com/advice");
	const theJson = await response.json();
	console.log(theJson);

	adviceTitle.innerText = `Advice # ${theJson.slip.id}`;

	advice.innerText = theJson.slip.advice;
}

diceBtn.addEventListener("click", fetchData);
