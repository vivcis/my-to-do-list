let inputContainerButton = document.getElementById('input-container');
let toDoContainer = document.getElementsById('to-do-container');
let newTask = document.getElementById('new-task');

inputContainerButton.addEventListener('click', function(){
	var list = document.createElement('li')
	list.innerText = newTask.value;
	toDoContainer.appendChild(list);
})