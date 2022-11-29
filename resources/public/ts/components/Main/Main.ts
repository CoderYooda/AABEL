import BaseComponent from "../BaseComponent";
import { dateFormatting } from '../../use/functions';
import { Accordion } from "../../class/Accordion";

export default class Main extends BaseComponent {
    createdAtFields: Array<HTMLElement> | null;

    constructor(container) {
        super(container);

    }
    
    init() {
        // Date formatting
        this.createdAtFields = Array.from(this.container.querySelectorAll('[data-format-date]'));
        this.createdAtFields.forEach((field) => {
            field.textContent = dateFormatting({
                date: Date.parse(field.textContent),
                year: "numeric",
                month: "long",
                day: "numeric",
            });
        });

        // Accordins
        const accordions = this.container.querySelectorAll('[data-accordion]');
        accordions.forEach((accordion) => {
            new Accordion(accordion);
        });
    }
}
