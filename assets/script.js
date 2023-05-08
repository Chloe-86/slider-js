//création du tableau d'objet des photos et des textes
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
  // Déclaration et récuperation du DOM
  const sliderImg = document.querySelector('#slider_img');
  const left = document.querySelector('.arrow_left');
  const right = document.querySelector('.arrow_right');
  const dots = document.querySelectorAll('.dot');
  const tagLineVar = document.querySelector('#p');
  let slideIndex = 0;
  

  //ici la fonction changeslide qui prends l'index en parametre et met a jour le contenu de la slide actuelle en fonction de l'index
  function changeSlide(index) {
	//assignation de la variable index à slideIndex
	slideIndex = index;

	const slide = slides[slideIndex];
	console.log(slideIndex);
	//qui charge l 'image de la slide
	sliderImg.src = `./assets/images/slideshow/${slide.image}`;
	//qui charge le texte de la slide
	tagLineVar.innerHTML = slide.tagLine;
	//mise à jour de la dot
	updateDots();
  }
  //mise a jour des petits points en bas
  function updateDots() {
	//pour chaque dots 
	dots.forEach((dot, index) => {
	  if (index === slideIndex) {
		console.log(slideIndex);
		dot.classList.add('dot_selected');
	  } else {
		dot.classList.remove('dot_selected');
	  }
	});
  }
  //gestionnaire d'evenement sur le bouton gauche
  left.addEventListener('click', () => {
	let index = slides.indexOf(slides[slideIndex]) - 1;
	console.log(slideIndex);
	if (index < 0) {
	  index = slides.length - 1;
	}
	changeSlide(index);
  });
  //gestionnaire d'eveement sur le bouton droit 
  right.addEventListener('click', () => {
	let index = slides.indexOf(slides[slideIndex]) + 1;
	console.log(slideIndex);
	if (index > slides.length - 1) {
	  index = 0;
	}
	changeSlide(index);
  });
  //gestionaire d'evenements sur les dots aussi on peux cliquer
  dots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
	  changeSlide(index);
	});
  });
  
  changeSlide(0);
  
  
  
