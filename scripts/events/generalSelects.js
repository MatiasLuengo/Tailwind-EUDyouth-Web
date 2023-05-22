const selectOptionsMinistries = document.querySelector('#selectOptionsMinistries');
const optionsMinistries = document.querySelector('#optionsMinistries');
selectOptionsMinistries.addEventListener('click', () => {
	selectOptionsMinistries.classList.toggle('active');
	optionsMinistries.classList.toggle('active');
});

const selectOptionsTodos = document.querySelector('#selectOptionsTodos');
const optionsTodos = document.querySelector('#optionsTodos');
selectOptionsTodos.addEventListener('click', () => {
	selectOptionsTodos.classList.toggle('active');
	optionsTodos.classList.toggle('active');
});

const selectOptionsAll = document.querySelector('#selectOptionsAll');
const optionsAll = document.querySelector('#optionsAll');
selectOptionsAll.addEventListener('click', () => {
	selectOptionsAll.classList.toggle('active');
	optionsAll.classList.toggle('active');
});