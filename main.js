
function submitClicked() {

	let line = document.getElementsById("bottom-line");

	line.classList.add("red");
}

document.getElementById('colorButton')
.addEventListener('click', submitClicked);


function mouseEvent();