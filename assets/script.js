
const slides = [
	{
	  "image": "slide1.jpg",
	  "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  "image": "slide2.jpg",
	  "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
	  "image": "slide3.jpg",
	  "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
	  "image": "slide4.png",
	  "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
  ];
  
  const sliderImg = document.querySelector('#slider_img');
  const diapo = document.querySelector('#banner');
  const left = document.querySelector('.arrow_left');
  const right = document.querySelector('.arrow_right');
  const dots = document.querySelectorAll('.dot');
  let slideIndex = 0;
  
  function changeSlide(index) {
	slideIndex = (index + slides.length) % slides.length;
	const slide = slides[slideIndex];
	sliderImg.src = `./assets/images/slideshow/${slide.image}`;
	document.querySelector('#p').innerHTML = slide.tagLine;
	updateDots();
  }
  
  function updateDots() {
	dots.forEach((dot, index) => {
		console.log(index);
		console.log(dot);
		console.log(slideIndex+'si');
	  if (index === slideIndex) {
		dot.classList.add('dot_selected');
	  } else {
		dot.classList.remove('dot_selected');
	  }
	});
  }
  
  left.addEventListener('click', () => {
	changeSlide(slideIndex - 1);
  });
  
  right.addEventListener('click', () => {
	changeSlide(slideIndex + 1);
  });
  
  dots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
	  changeSlide(index);
	});
  });
  
  changeSlide(0);
  