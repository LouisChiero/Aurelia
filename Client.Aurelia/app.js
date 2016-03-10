import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

@inject(HttpClient)
export class App {

    constructor() {
        this.message = "";
    }

    activate() {
        this.message = "Aurelia Hello World!";
    }

    changeMessage () {
        this.message = "Goodbye!!!";
    }
}
