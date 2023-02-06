// Swiper 
var swiper = new Swiper(".popular-content", {
  sliderPerView:1,  
  spaceBetween: 10,
  autoplay: {
    delay: 755500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    280:{
        sliderPerView:1,  
        spaceBetween: 10, 
    },
    320:{
        sliderPerView:2,  
        spaceBetween: 10, 
    },
    510:{
        sliderPerView:2,  
        spaceBetween: 10, 
    },
    758:{
        sliderPerView:3,  
        spaceBetween: 15, 
    },
    900:{
        sliderPerView:4,  
        spaceBetween: 20, 
    },
},
});