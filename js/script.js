document.addEventListener('DOMContentLoaded', () => {
    
    const slider = document.querySelector('.swiper');

    const swiper = new Swiper(slider, {
        slidesPerView: 3,
        spaceBetween: 50,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        autoplay: {
            delay: 4000,
        },
        breakpoints: {

            320: {
                slidesPerView: 1.5,
                spaceBetween: 0,
            },

            1023: {
                slidesPerView: 3,
                spaceBetween: 50,
            }
        }
    });
});