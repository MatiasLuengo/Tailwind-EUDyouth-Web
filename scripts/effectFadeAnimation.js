const ministries_section = document.getElementById('ministries_section');
const header_section = document.getElementById('header_section');
const events_section = document.getElementById('events_section');
const ressources_section = document.getElementById('ressources_section');
const mission_section = document.getElementById('mission_section');
const about_section = document.getElementById('about_section');
const directors_section = document.getElementById('directors_section');
const quantity_section = document.getElementById('quantity_section');
const contact_section = document.getElementById('contact_section');

const fadeInEffect = (elements, observer) => {
    elements.forEach((element) => {
        if(element.isIntersecting){
            element.target.classList.add('opacity-1');
            element.target.classList.add('ease-in-out');
            element.target.classList.add('transition');
            element.target.classList.add('duration-700');
            element.target.classList.add('scale-100');
            element.target.classList.add('animate-fadeIn');
            element.target.classList.remove('opacity-0');
            element.target.classList.remove('scale-75');
        }
    });
};

const observer = new IntersectionObserver(fadeInEffect, {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
});

observer.observe(ministries_section);
observer.observe(header_section);
observer.observe(events_section);
observer.observe(ressources_section);
observer.observe(mission_section);
observer.observe(about_section);
observer.observe(directors_section);
observer.observe(quantity_section);
observer.observe(contact_section);



