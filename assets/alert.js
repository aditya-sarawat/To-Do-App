const content = document.querySelector(".content");


function addNewElement() {
	const input = document.querySelector(".inputvalue");
	if (input.value != "") {
		const div = document.createElement("div");
		div.classList.add("todocontent");
		const divcontent = document.createElement("div");
		divcontent.classList.add("name");
		divcontent.innerText = input.value;
		const checkButton = document.createElement("button");
		checkButton.classList.add("buttonmarginone");
		checkButton.innerHTML = `<i class="fas fa-check"></i>`;
		checkButton.addEventListener("click", completed);
		const trashButton = document.createElement("button");
		trashButton.classList.add("buttonmargin");
		trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
		trashButton.addEventListener("click", deletetodo);
		div.appendChild(divcontent);
		div.appendChild(checkButton);
		div.appendChild(trashButton);
		content.appendChild(div);
		input.value = "";
	}
	else {
		window.alert("Please Write Something to add!");
	}
}

function completed() {
	this.parentNode.classList.add("fade");
}

function deletetodo() {
	this.parentNode.classList.add("fall");
	this.parentNode.addEventListener("animationend", function() {
		this.remove();
	});
}