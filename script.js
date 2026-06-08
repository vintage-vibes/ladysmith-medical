

//  const swiper = new Swiper('.card-wrapper', {
 
//   loop: true,
//   // slidesPerView: 1,
//     spaceBetween: 30,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//     dynamicBullets: true
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },

//   breakpoints: {
//     0:  {slidesPerView: 1 },
//     768: { slidesPerView: 2 },
//    1024: { slidesPerView: 3 }
//   }
// });


// const textSwiper = new Swiper(".text-slider", {
//     loop: true,
//     autoplay: {
//         delay: 1000,
//         disableOnInteraction: false,
//     },
// });


const fa_bars = document.querySelector('.fa-bars');
const mobile_link = document.querySelector('.mobile-link');
const close = document.querySelector('.fa-times');
const mobile = document.querySelectorAll('.mobile-link a')


fa_bars.addEventListener("click", ()=>{
    mobile_link.classList.add('active')
    
    
})

close.addEventListener('click',()=>{
  mobile_link.classList.remove('active');
})


mobile.forEach(link => {
  link.addEventListener("click",()=>{
    mobile_link.classList.remove('active')
  })
});


const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

   
 


  breakpoints:{
    0:{
      slidesPerView:1,
       spaceBetween: 20,
    },
    768:{
       slidesPerView:2,
      spaceBetween: 30,
    },
    1024:{
       slidesPerView:3,
      spaceBetween: 40,
    }
  }
});
