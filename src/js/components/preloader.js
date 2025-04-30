export default class Preloader {
    constructor() {
        this.preloader = document.getElementsById('.preloader');
    }

    show () {
        gsap.to(this.preloader, {
            duration: 1, 
            y:'0%',
            ease: 'power2.out',
        });
    }

    hide () {
        gsap.to(this.preloader, {
            duration: 1, 
            y:'-100%',
            display: 'none',
            ease: 'power2.in',
            onComplete: () => {
                this.preloader.style.display = 'none'; // Ocultar el preloader después de la animación
            },

        });
    }
}

