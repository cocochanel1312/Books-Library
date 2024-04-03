import { DivComponent } from "../../common/div-component.js";

export class Header extends DivComponent {
    constructor(appState) {
        super();
        this.appState = appState;
    }

// Верстка header
    render() {
        this.el.innerHTML = '';
        this.el.classList.add('header'); // задали дефольный класс компоненту 'header'
        this.el.innerHTML = ` 
            <div>
                <img src="/static/Logo.svg" alt="Логотип" />
            </div>
            <div class="menu">
                <a class="menu__item" href="#">
                    <img src="/static/SearchLogo.svg" alt="Иконка посика"/>
                    Поиск книг
                </a>
                <a class="menu__item" href="#">
                    <img src="/static/FavoriteLogo.svg" alt="Иконка избранного"/>
                    Избранные книги
                    <div class="menu__counter">
                        ${this.appState.favorites.length}
                    </div>
                </a>
            </div>
        `;
        return this.el;
    }
}