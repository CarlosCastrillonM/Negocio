const btnLeft = document.querySelector(".btn-left"),
        btnRight = document.querySelector(".btn-right"),
        slider = document.querySelector("#slider"),
        sliderSection = document.querySelectorAll(".slider-section");

let sectionVisible = (-1/sliderSection.length)*100;
let operation = 0;

console.log(sliderSection);
console.log(sectionVisible);
console.log("La cantidad total de elementos que hay en el slider: " + sliderSection.length)

btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

function moveToRight() {    // Concatenar la unidad '%' a la variable sectionVisibleslider.style.transform = `translate(${sectionVisible}%)`;
    slider.style.transform = "translate(" + sectionVisible + "%)"; //esta es otra forma de hacerlo
}

function moveToLeft() {
    slider.style.transform = "translate(" + -sectionVisible + "%)";
    
}
