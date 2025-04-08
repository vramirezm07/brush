export default class Preloader {
    constructor() {
        this.preloader = document.getElementsById('.preloader');
    }

    show () {
        gsap.to(this.preloader, {
            duration: 1, 
            x=0%,
            ease= 'power2.out',
        });
    }

    hide () {
        gsap.to(this.preloader, {
            duration: 1,
            delay: .5, 
            x=-100%,
            display= 'none',
            ease= 'power2.out',

        });
    }
}

