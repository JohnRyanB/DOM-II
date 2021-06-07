// Your code goes here
const signUpButton = document.getElementsByClassName("btn");
// console.log(signUpButton);

const navButton = document.querySelectorAll(".nav-link");
// console.log(navButton);

const introText = document.querySelector(".text");
// console.log(introText);

const funBus = document.querySelector(".logo-heading");
// console.log(funBus);

const busPic = document.querySelector(".busPic");
// console.log(busPic);

const imgCont = document.querySelectorAll(".img-content");
console.log(imgCont);

const destination = document.querySelector(".destination");
console.log(destination);

navButton.forEach((element) => {
	element.addEventListener("click", (event) => {
		event.preventDefault();
		console.log("cannot do that");
	});
}, false);

signUpButton[1].addEventListener("mouseover", (event) => {
	event.target.style.backgroundColor = "black";
});

signUpButton[0].addEventListener("click", (event) => {
	event.target.style.backgroundColor = "pink";
});

signUpButton[2].addEventListener("touchend", (event) => {
	event.target.style.backgroundColor = "orange";
});

introText.addEventListener("dblclick", (event) => {
	event.target.style.display = "none";
});

destination.addEventListener("mouseleave", (event) => {
	event.target.style.color = "blue";
});

navButton.forEach((element) => {
	element.addEventListener("keydown", (event) => {
		if (event.key === "l") {
			event.currentTarget.style.display = "none";
		}
	});
});

funBus.addEventListener("copy", (event) => {
	event.target.style.color = "green";
});

busPic.addEventListener("drag", (event) => {
	event.target.style.opacity = ".5";
});

busPic.addEventListener("dragend", (event) => {
	event.target.style.opacity = ".75";
});

imgCont.forEach((element) => {
	element.addEventListener("wheel", (event) => {
		event.target.style.width = "20px";
	});
});
