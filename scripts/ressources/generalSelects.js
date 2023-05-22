const selectOptionsMinistries = document.querySelector('#selectOptionsMinistries');
const optionsMinistries = document.querySelector('#optionsMinistries');
selectOptionsMinistries.addEventListener('click', () => {
	selectOptionsMinistries.classList.toggle('active');
	optionsMinistries.classList.toggle('active');
});

const selectOptionsFileType = document.querySelector('#selectOptionsFileType');
const optionsFileType = document.querySelector('#optionsFileType');
selectOptionsFileType.addEventListener('click', () => {
	selectOptionsFileType.classList.toggle('active');
	optionsFileType.classList.toggle('active');
});

const selectOptionsLanguage = document.querySelector('#selectOptionsLanguage');
const optionsLanguage = document.querySelector('#optionsLanguage');
selectOptionsLanguage.addEventListener('click', () => {
	selectOptionsLanguage.classList.toggle('active');
	optionsLanguage.classList.toggle('active');
});

const selectOptionsAll = document.querySelector('#selectOptionsAll');
const optionsAll = document.querySelector('#optionsAll');
selectOptionsAll.addEventListener('click', () => {
	selectOptionsAll.classList.toggle('active');
	optionsAll.classList.toggle('active');
});

