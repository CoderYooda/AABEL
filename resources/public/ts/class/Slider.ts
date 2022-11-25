import Swiper, { Navigation, Keyboard, EffectCoverflow, Parallax, A11y } from 'swiper';

export class Slider {
    container: HTMLElement | null;
    slider: any;

    constructor (container: HTMLElement) {
        this.container = container;
        this.slider = null;
        
        this.init();
    }

    init() {
        this.slider = new Swiper('#slider', {
            modules: [Navigation, Keyboard, EffectCoverflow, Parallax, A11y],
            slidesPerView: 3,
            loop: true,
            grabCursor: true,
            centeredSlides: true,
            speed: 700,
            parallax: true,
            spaceBetween: 200,

            slideActiveClass: 'active',

            navigation: {
                prevEl: '.portfolio__button-prev',
                nextEl: '.portfolio__button-next'
            },

            keyboard: {
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
            },

            // effect: 'coverflow',

            coverflowEffect: {
                rotate: 140,
                stretch: 50,
                slideShadows: false,
            },

            a11y: {
                enabled: true,
                prevSlideMessage: 'Предыдущий слайд',
                nextSlideMessage: 'Следующий слайд',
                firstSlideMessage: 'Первый слайд',
                lastSlideMessage: 'Последний слайд',
            },

            on: {
                init() {
                    // this.el.addEventListener('mouseenter', () => {
                    //     this.autoplay.stop();
                    // });
            
                    // this.el.addEventListener('mouseleave', () => {
                    //     this.autoplay.start();
                    // });
                    // this.el.addEventListener('click', () => {
                    //     console.log(this.slider);
                        
                    // });
                }
              },
        });
    }
}
