const btnLeft = document.querySelector(".btn-left"),
        btnRight = document.querySelector(".btn-right"),
        slider = document.querySelector("#slider"),
        sliderSection = document.querySelectorAll(".slider-section");

let sectionVisible = (-1/sliderSection.length)*100;
let operation = 0;

console.log(sliderSection);
console.log(sectionVisible);
console.log("La cantidad total de elementos que hay en el slider: " + sliderSection.length)

btnLeft.addEventListener("click", e => moveToLeft());
btnRight.addEventListener("click", e => moveToRight());

setInterval(() => {
    moveToRight();
}, 2000);

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
    
}
