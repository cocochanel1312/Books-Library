// Паттерн на то, как мы будет создавать компоненты div

export class DivComponent {
    constructor() {
        this.el = document.createElement('div');
    }

    render() {
        this.el;
    }
}