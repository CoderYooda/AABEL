import { Slider } from "../../class/Slider";
import BaseComponent from "../BaseComponent";

export default class Main extends BaseComponent {
    init() {
        console.log(11);
        new Slider(this.container);
    }
}
