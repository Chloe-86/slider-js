const btnBefore = document.querySelector('.arrow_left');
const btnNext= document.querySelector('.arrow_right');
const p = document.querySelector('p');
const slider_img = document.querySelector('#slider_img');
const puces = document.querySelectorAll('li');
const buttons = document.querySelectorAll('.arrow');

let slides = [
    {
        index: 0,
        imageURL: 'slide1.jpg',
        titleTag: 'Impressions tous formats <span>en boutique et en ligne</span>'
    },
    {
        index: 1,
        imageURL: 'slide2.jpg',
        titleTag: 'Tirages haute définition grand format <span>pour vos bureaux et events</span>'
    },
    {
        index: 2,
        imageURL: 'slide3.jpg',
        titleTag: 'Grand choix de couleurs <span>de CMJN aux pantones</span>'
    },
    {
        index:3,
        imageURL: "slide4.png",
        titleTag: "Autocollants <span>avec découpe laser sur mesure</span>"
      }
]

//demarrage
let slideIndex = slides[0].index;

function display(){
    let titleTag = slides[slideIndex].titleTag;
    p.innerHTML = titleTag;
    slider_img.src = `./assets/images/slideshow/${slides[slideIndex].imageURL}`;
    puces.forEach((element, index) => {

        if(index === slideIndex){
         element.classList.add('dot_selected');
          
        } else {
            element.classList.remove('dot_selected');
        }
    });
};

display();


function beforeSlide(){
    
    if(slideIndex === 0){
    slideIndex = slides.length - 1;
    
    }
    else{
        slideIndex--;
    }

}

function nextSlide(){
    
    if(slideIndex === slides.length-1){
        slideIndex = 0;
    }
    else{
        slideIndex++;
    }
}

btnBefore.addEventListener('click',()=>{
    beforeSlide();
    display();
})

btnNext.addEventListener('click', ()=>{
    nextSlide();
    display();
})



