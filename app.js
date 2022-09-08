document.addEventListener('DOMContentLoaded', () => {

let path = document.querySelector(".line-container path")
let pathLength = path.getTotalLength()

path.style.strokeDasharray = pathLength + " " + pathLength;
path.style.strokeDashoffset = pathLength;

function bg () { 
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
  
  var drawLength = pathLength * (scrollPercentage) * 1.5 ;

  path.style.strokeDashoffset = pathLength - drawLength;

  const target = document.querySelectorAll('.scroll');
  var index = 0, length = target.length;
  for (index; index < length; index++) {
    var pos = window.pageYOffset * target[index].dataset.rate * 0.2

    if (target[index].dataset.direction === 'vertical') {
      target[index].style.transform = 'translate3d(0px,'+pos+'px,0px)';
    } else {
      var posX = window.pageYOffset * target[index].dataset.ratex;
      var posY = window.pageYOffset * target[index].dataset.ratey;

      target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px,0px)'
    }

    if (target[index].dataset.direction === 'horizontal') {
      target[index].style.transform = 'translate3d('+pos+'px,0px,0px)';
    } else {
      var posX = window.pageYOffset * target[index].dataset.ratex;
      var posY = window.pageYOffset * target[index].dataset.ratey;

      target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px,0px)'
    }
  }
}

var swiper = new Swiper('.swiper-container', {
  initialSlide: 2,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
  },
  pagination: {
      el: '.swiper-pagination',
  },
});



    window.addEventListener("scroll",bg)



})