import { DivComponent } from "../../common/div-component";
import './card.css'


//Создание карточек для отображения
export class Card extends DivComponent {
    constructor(appState, cardState) { 
        super();
        this.appState = appState; 
        this.cardState = cardState; // Состояние карточки
    }

#addToFavorites() { // функция на добавление в избранное
    this.appState.favorites.push(this.cardState);
}

#deleteFromFavorites() { // функция на удаление из избранного
    this.appState.favorites = this.appState.favorites.filter(
        book => book.key != this.cardState.key
    );
}


// Верстка карточки
    render() {
        this.el.classList.add('card');
        const existInFavorites = this.appState.favorites.find(
            book => book.key == this.cardState.key
        );
        this.el.innerHTML = `
        <div class="card__image">
            <img src="https://covers.openlibrary.org/b/olid/${this.cardState.cover_edition_key}-M.jpg" alt="Обложка" />
        </div>
        <div class="card__info">
            <div class="card__tag">
                ${this.cardState.subject ? this.cardState.subject[0] : 'Не найдено'}
            </div>
            <div class="card__name">
                ${this.cardState.title}
            </div>
             <div class="card__author">
                ${this.cardState.author_name ? this.cardState.author_name[0] : 'Не найдено'}
            </div>
            <div class="card__footer">
                <button class="button__add ${existInFavorites ? 'button__active' : ''}">
                    ${existInFavorites
                        ? '<img src="/static/FavoriteLogo.svg" />'
                        : '<img src="/static/Favorite-white.svg" />'
                    }
                </button>
            </div>
        </div>
        `;
        if (existInFavorites) { // Повесили условие на кнопку добавление-удаление из избранного
            this.el 
                .querySelector('button')
                .addEventListener('click', this.#deleteFromFavorites.bind(this)) // добавили ивент на кнопку удалении из избранного
        } else {
            this.el
                .querySelector('button')
                .addEventListener('click', this.#addToFavorites.bind(this)) // добавили ивент на кнопку добавление в избранное
        }
        return this.el;
    }
}