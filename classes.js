import { rand } from "./utils.js";

export class Component {
    constructor(type, executionMode) {
        this.#type = type;
        this.#executionMode = executionMode;
    }

    #runId = rand();
    get runId() { return this.#runId };

    #type;
    get type() { return this.#type };

    #executionMode;
    get executionMode() { return this.#executionMode };

    #runStatus = 'began';
    get runStatus() { return this.#runStatus };
    set runStatus(val) { this.#runStatus = val };

    #children = [];
    get children() { return this.#children };
    set children(val) { this.#children = val };
}



export class If extends Component {
    constructor(executionMode) {
        super('If', executionMode);
        Object.preventExtensions(this);
    }

    #executionMode;
    get executionMode() { return this.#executionMode };

    #param;
    get param() { return this.#param };
    set param(val) { this.#param = val };

    #fn;
    get fn() { return this.#fn };
    set fn(val) { this.#fn = val };

    Run(fn) {
        console.log("Started running fn.");
        fn();
        console.log("Ended running fn");
    }
}

export class Equal extends Component {
    constructor() {
        super('Equal');
        Object.preventExtensions(this);
    }

    #paramA;
    get paramA() { return this.#paramA };
    set paramA(val) { this.#paramA = val };

    #paramB;
    get paramB() { return this.#paramB };
    set paramB(val) { this.#paramB = val };

    #val;
    get val() { return this.#val };
    set val(value) { this.#val = value };
}
