let test = document.querySelector('#test');

let questions = [
	{
		text: 'Знак зодиака Алины',
		right: 'Лев',
	},
	{
		text: 'Какой язык преподает Алина?',
		right: '"Английский"',
	},
	{
		text: 'Как зовут собаку Алины?',
		right: 'Айс',
	},
];


let button = document.querySelector('#button');
button.addEventListener('click', function() {
	let inputs = document.querySelectorAll('#test input');
	
	for (let input of inputs) {
		input.classList.remove('correct');
		input.classList.remove('incorrect');
		
		if (input.value == input.dataset.right) {
			input.classList.add('correct');
		} else {
			input.classList.add('incorrect');
		}
	}
});