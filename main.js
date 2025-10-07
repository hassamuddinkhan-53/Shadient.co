//  const swiper = new Swiper('.customer-swiper', {
//             slidesPerView: 2,
//             spaceBetween: 24,
//             loop: true,
//             // navigation: {
//             //     nextEl: '.swiper-button-next',
//             //     prevEl: '.swiper-button-prev',
//             // },
//             breakpoints: {
//                 1024: {
//                     slidesPerView: 3,
//                 },
//                 768: {
//                     slidesPerView: 2,
//                 },
//                 0: {
//                     slidesPerView: 1,
//                 }
//             }
//         });
const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },

    breakpoints: {
        992: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    // }
        768: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        }
    }
});
