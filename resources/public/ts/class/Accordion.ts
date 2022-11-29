export class Accordion {
    defaultOptions: {
        isOpen: void;
    };
    options: Object | any;
    accordion: HTMLElement | null;
    control: HTMLElement | null;
    content: HTMLElement | null;

    constructor(accordion, options?) {
        const defaultOptions = {
            isOpen: () => {},
            isClose: () => {},
            speed: 300
        };

        this.options = Object.assign(defaultOptions, options);
        this.accordion = accordion;
        this.control = this.accordion.querySelector('[data-accordion-control]');
        this.content = this.accordion.querySelector('[data-accordion-content]');

        this.init();
    }

    init() {
        this.control.addEventListener('click', () => {
            this.accordion.classList.toggle('open');
            if (this.accordion.classList.contains('open')) {
                this.open();
            } else {
                this.close();
            }
        });
    }

    open() {
        this.content.style.maxHeight = `${ this.content.scrollHeight }px`;
        this.options.isOpen();
    }

    close() {
        this.content.style.maxHeight = null;
        this.options.isClose();
    }
}
