import { DivComponent } from "../../common/div-component.js";

export class Header extends DivComponent {
    constructor(appState) {
        super();
        this.appState = appState;
    }

// Верстка header
    render() {
        this.el.innerHTML = '';
        this.el.classList.add('header');
        this.el.innerHTML = `
            <div>
                <img src="/static/Logo.svg" alt="Логотип" />
            </div>
        `;
        return this.el;
    }
}