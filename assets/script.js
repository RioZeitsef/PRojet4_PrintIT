
/**
 * 
 */
let banner = document.querySelectorAll(".banner-img")
let arrows = document.querySelectorAll(".arrow")
let dots = document.querySelectorAll(".dot")
let bannerImg = document.querySelectorAll(".banner-img")


for (let i = 0; i < dots.length; i++) {
        let dotswhite = dots[i]
          dots[i].classList.add("dot_" + i)
        dotswhite.addEventListener("click", (event) => {
          dotSelected = event.target
          dotSelectedWhite(Array.from(dots), dotSelected)
        })
}



for (let i = 0; i < arrows.length; i++) {
    let arrowDirection = arrows[i]

    arrowDirection.addEventListener("click", e => {
      arrowTarget = e.target;
    })
} 


    

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
function sliderNext(imageArray, index) {
    let image = imageArray[index + 1]; 
    return image;
}


function sliderPrevious(imageArray, index) {
  if (index === 0) {
    index = imageArray.length - 1;
  }
  let image = imageArray[index - 1];
  return image
}