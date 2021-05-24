const content = document.querySelector(".content");
const input = document.querySelector(".inputvalue");

function addNewElement() {
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
		addTodo(input.value);
		input.value = "";
		console.log(input.value);
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
	removeTodo(this.parentNode);
}

function addTodo(todo) {
	let todos;
	if(localStorage.getItem("todos") === null) {
		todos = [];
	}
	else {
		todos = JSON.parse(localStorage.getItem("todos"));
	}
	todos.push(todo);
	console.log(todo);
	localStorage.setItem("todos", JSON.stringify(todos));
}

function setCompleted(todo) {
	
}

function removeTodo(todo) {
	let todos;
	if(localStorage.getItem("todos") === null) {
		todos = [];
	}
	else {
		todos = JSON.parse(localStorage.getItem("todos"));
	}
	const todoIndex = todo.children[0].innerText;
  	todos.splice(todos.indexOf(todoIndex), 1);
  	localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
	let todos;
	if (localStorage.getItem("todos") === null) {
		todos = [];
	}
	else {
		todos = JSON.parse(localStorage.getItem("todos"));
	}
	todos.forEach(function(todo) {
		const div = document.createElement("div");
		div.classList.add("todocontent");
		const divcontent = document.createElement("div");
		divcontent.classList.add("name");
		divcontent.innerText = todo;
		console.log(todo);
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
	});
}

getTodos();
