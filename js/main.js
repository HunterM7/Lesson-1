const checkbox = document.querySelector('#checkbox');
const radiobox = document.querySelectorAll('[name="radiobox"]');

checkbox.addEventListener('change', () => {
	checkbox.checked ?
		console.log('Checkbox is checked') :
		console.log('Checkbox is unchecked');
});

radiobox.forEach(x => {
	x.addEventListener('change', () => {
		console.log(`Choosed option: ${x.value}`);
	});
});
