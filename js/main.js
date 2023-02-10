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
//Show Video
let playButton = document.querySelector('.play-movie');
let video = document.querySelector('.video-container');
let myvideo = document.querySelector('#myvideo');
let closebtn = document.querySelector('.close-video');

playButton.onclick = () => {
  video.classList.add("show-video");
  // Auto Play When Click On Button
  myvideo.play();
};
closebtn.onclick = () => {
  video.classList.remove("show-video");
  // Auto Play When Click On Button
  myvideo.pause();
};