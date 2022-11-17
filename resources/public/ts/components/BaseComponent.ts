export default class BaseComponent {
    container: HTMLElement | null;
    
    constructor(container: HTMLElement) {
        this.container = container;
       
        this.init();
    }

    init() {}
}