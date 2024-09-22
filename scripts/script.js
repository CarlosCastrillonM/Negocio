const btnLeft = document.querySelector(".btn-left"),
        btnRight = document.querySelector(".btn-right"),
        slider = document.querySelector("#slider"),
        sliderSection = document.querySelectorAll(".slider-section"),
        cardWrapper = document.querySelector(".card-wrapper");

let sectionVisible = (-1/sliderSection.length)*100;
let operation = 0;
const delay = 4000;

cardWrapper.style.width = `${sliderSection.length*100}%`;

var x = document.querySelectorAll('.slider-section');

x.forEach(element => {
    element.style.width = `${-sectionVisible}%`;
});

btnLeft.addEventListener("click", e => moveToLeft());
btnRight.addEventListener("click", e => moveToRight());

let idInterval = setInterval(() => {
    moveToRight();
}, delay);

function moveToRight() {    //Esta es otra forma de hacerlo    slider.style.transform = "translate(" + sectionVisible + "%)"; 
    operation += sectionVisible;
    
    if (operation <= sectionVisible*(sliderSection.length)) {
        operation = 0;
        slider.style.transform = `translate(${operation}%)`;
        slider.style.transition = "none";

    } else {
        slider.style.transform = `translate(${operation}%)`;   //Concatenar la unidad '%' a la variable sectionVisible
        slider.style.transition = "all ease 0.6s";
    }
    clearInterval(idInterval);
    idInterval = setInterval(() => moveToRight(), delay)
}

function moveToLeft() {
    operation -= sectionVisible;

    if (operation > 0) {
        operation = sectionVisible*(sliderSection.length-1);
        slider.style.transform = `translate(${operation}%)`;
        slider.style.transition = "none";

    } else {
        slider.style.transform = `translate(${operation}%)`;
        slider.style.transition = "all ease 0.6s";
    }
    clearInterval(idInterval);
    idInterval = setInterval(() => moveToRight(), delay)
}