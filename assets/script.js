
/**
 * 
 */
let index = 0
let banner = document.querySelectorAll(".banner-img")
let arrows = document.querySelectorAll(".arrow")
let dots = document.querySelectorAll(".dot")
let bannerImg = document.querySelectorAll(".banner-img")
let tagline = document.querySelector('p')


for (let i = 0; i < dots.length; i++) {
  let dotswhite = dots[i]
    dots[i].classList.add("dot_" + i)
    dotswhite.addEventListener("click", (event) => {
      dotSelected = event.target
      dotSelectedWhite(Array.from(dots), dotSelected)
      slideto(i);
  })
}

for (let i = 0; i < arrows.length; i++) {
  let arrowDirection = arrows[i]

  arrowDirection.addEventListener("click", e => {
    if (e.target.classList.contains('arrow_right')) {
      // Naviguer vers la droite
      let nextImage = sliderNext(slides, index);
      bannerImg[0].src = nextImage.url;
      tagline.innerHTML = nextImage.tagLine;
      index = (index + 1) % slides.length;
    } else if (e.target.classList.contains('arrow_left')) {
      // Naviguer vers la gauche
      let previousImage = sliderPrevious(slides, index);
      bannerImg[0].src = previousImage.url;
      tagline.innerHTML = previousImage.tagLine;
      index = (index - 1 + slides.length) % slides.length;
    }

    // Mettre à jour le dot sélectionné
    dotSelectedWhite(Array.from(dots), dots[index]);
  })
}

// fonction qui retire le bouton blanc lorsqu'on clique sur un autre
function dotSelectedWhite(dots, dotSelected) {
  dots.filter((element, index) => {
    if (dotSelected.classList.contains("dot_" + index)) {
      return false
    }
    else {
      return true
    }
  }).forEach(element => {
    element.classList.remove("dot_selected")
  });
  dotSelected.classList.add("dot_selected")
  tagline[i].classList.add("tagline")
}

const slides = [
  {
    url: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    url: "./assets/images/slideshow/slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    url: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    url: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

/**
 * 
 * @param {number} index
 * @param {array} imageArray   
 * @returns {object}
 */

// fonction pour passer à l'image suivante
function sliderNext(imageArray, index) {
    if (index >= imageArray.length - 1) {
      index = 0;
    }
    else {
      index = index + 1; 
    }
    let image = imageArray[index];

    return image;
}

// fonction pour passer à l'image précédente
function sliderPrevious(imageArray, index) {
  if (index === 0) {
    index = imageArray.length - 1;
  }
  else {
    index = index - 1;
  }
  let image = imageArray[index];

  return image
}

// fonction pour séléctionner les dots et les maintenir blancs
function dotSelectedWhite(dots, dotSelected) {
  dots.filter((element, i) => {
    if (dotSelected.classList.contains("dot_" + i)) {
      return false
    }
    else {
      return true
    }
  }).forEach(element => {
    element.classList.remove("dot_selected")
  });
  dotSelected.classList.add("dot_selected")
}
/**
 * 
 * @param {number} index index de l'image séléctionné
 * 
 */
function slideto(index) {
  let currentIndex;
  if (index >= 0 && index < slides.length) {
    currentIndex = index;

    slides.forEach((img, i) => {
      if (i === currentIndex) {
        bannerImg[0].src = img.url;
        bannerImg[0].alt = img.tagLine;
      }
    });
  }
}



