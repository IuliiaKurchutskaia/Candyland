
"use strict"





const burgerMenu = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav');
const navItem = document.querySelector('.nav-item')
burgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('open')
    burgerMenu.classList.toggle('open')
})

function closeMenu(event) {
    if(event.target.classList.contains('nav-item')) {
    burgerMenu.classList.remove('open')
    navMenu.classList.remove('open')
    }
}

navMenu.addEventListener('click', closeMenu)


//-------------------------------------------//

const portfolioBtn = document.querySelectorAll('.button_port');
const portfolioImages = document.querySelectorAll('.portfolio-image');

//portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);

const portfolioBtns = document.querySelector('.button-choice');

function changeImage(event) {
    if(event.target.classList.contains('button_port')) {

      let season=event.target.dataset.season;
  //    console.log(`${season}`);
   
     portfolioImages.forEach((img, index) => img.src = `./assets/img/${season}/${index + 1}.jpg`);
     portfolioBtn.forEach((el)=>el.classList.remove("active"));
     event.target.classList.add("active");
    }
}

portfolioBtns.addEventListener('click', changeImage)


//-------------------------------------------

  const seasons = ['Глазурь', 'Шоколад', 'Торты', 'Упаковка'];

  function preloadImages() {

    seasons.forEach((folder)=>{
            for(let i = 1; i <= 6; i++) {
        const img = new Image();
    img.src = `./assets/img/${folder}/${i}.jpg`;
 //   console.log(`${img.src}`);
            }
          })
    }

   preloadImages();