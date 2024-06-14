const scrollElements = document.querySelectorAll('.show-animate');
const scrollElements2 = document.querySelectorAll('.show-animate2');
const scrollElements3 = document.querySelectorAll('.show-animate3');
const scrollElements4 = document.querySelectorAll('.show-animate4');

function checkScroll() {
    const windowHeight = window.innerHeight;

    scrollElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
    });

    scrollElements2.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
    });
    scrollElements3.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
    });
    scrollElements4.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);
