var div = document.getElementById('root');
var ul = document.createElement('ul');

div.appendChild(ul);

function insertEl(str) {
	var li = document.createElement('li');
	var span = document.createElement('span');
	span.innerHTML = str;
	
	var DelButton = document.createElement('button');
	DelButton.innerHTML = "�������";
	DelButton.addEventListener("click", function(){li.remove()});

	li.appendChild(span);
	li.appendChild(DelButton);
	ul.appendChild(li);
}

insertEl("C������ ������� #3 �� web-����������������");

var input = document.createElement('input');

input.setAttribute("id", "add_task_input");

var AddButton = document.createElement('button');
AddButton.innerHTML = "��������";
AddButton.addEventListener("click", function(){insertEl(input.value)});

AddButton.setAttribute("id", "add_task");

div.appendChild(input);
div.appendChild(AddButton);