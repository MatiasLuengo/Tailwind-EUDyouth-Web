const selectCountry = document.querySelector('#selectCountry');
const countries = document.querySelector('#countries');
const selectcontentCountry = document.querySelector('#selectCountry .selectcontentCountry');
const hiddeninputCountry = document.querySelector('#inputCountry');

document.querySelectorAll('#countries > .country').forEach((option) =>
{
	option.addEventListener('click', (i) =>{
		i.preventDefault();
		selectcontentCountry.innerHTML = i.currentTarget.innerHTML;
		selectCountry.classList.toggle('active');
		countries.classList.toggle('active');
		hiddeninputCountry.value = i.currentTarget.querySelector('.chosenCountry').innerText;
	});
});  

selectCountry.addEventListener('click', () => {
	selectCountry.classList.toggle('active');
	countries.classList.toggle('active');
});