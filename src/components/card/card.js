import { DivComponent } from "../../common/div-component";
import './card.css'


//Создание карточек для отображения
export class Card extends DivComponent {
    constructor(appState, cardState) { 
        super();
        this.appStatestate = appState; 
        this.cardState = cardState; // Состояние карточки
    }


// Верстка карточки
    render() {
        this.el.classList.add('card');
        const existInFavorites = this.appStatestate.favorites.find(
            b => b.key == this.cardState.key
        );
        this.el.innerHTML = `
            <div class="card__image">
                <img src="https://covers.openlibrary.org/b/olid/${this.cardState.cover_edition_key}-M.jpg" alt="Обложка" />
            </div>
            <div class="card__info>
                <div class="card__tag">
                    ${this.cardState.subject ? this.cardState.subject[0] : 'Не задано'}
                </div>
                <div class="card__name">
                    ${this.cardState.title}
                </div>
                <div class="card__author">
                    ${this.cardState.author_name ? this.cardState.author_name[0] : 'Не задано'}
                </div>
                <div class="card__footer">
                    <button class="button_add ${existInFavorites ? 'button__active' : ''}">
                        ${existInFavorites
                            ? '<img src="/static/FavoriteLogo.svg"/>'
                            : '<img src="/static/Favorite-White.svg"/>'
                        }
                    </button>
                </div>
            </div>
        `
        return this.el;
    }
}