const selectLaguange = document.querySelector('#selectLaguange');
const idioms = document.querySelector('#idioms');
const selectcontent = document.querySelector('#selectLaguange .selectcontent');
const hiddeninput = document.querySelector('#inputLaguange');

document.querySelectorAll('#idioms > .language').forEach((option) =>
{
	option.addEventListener('click', (e) =>{
		e.preventDefault();
		selectcontent.innerHTML = e.currentTarget.innerHTML;
		selectLaguange.classList.toggle('active');
		idioms.classList.toggle('active');
		hiddeninput.value = e.currentTarget.querySelector('.chosen').innerText;
		/* console.log(hiddeninput.value); */
	})
});

selectLaguange.addEventListener('click', () => {
	selectLaguange.classList.toggle('active');
	idioms.classList.toggle('active');
});