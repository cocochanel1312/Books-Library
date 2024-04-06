import { DivComponent } from "../../common/div-component";
import { Card } from "../card/card";
import './card-list.css'


//Создание списка карточек для отображения
export class CardList extends DivComponent {
    constructor(appState, parentState) { 
        super();
        this.appState = appState; // Используем для обновления состояния "Избранное"
        this.parentState = parentState; // Используется для состояния "Загрузка"
    }


// Верстка списка и загрузки на странице
    render() {
        if (this.parentState.loading) { // Проверка на состояние "Загрузка"
            this.el.innerHTML = `<div class="card_list__loader">
                <img src="/static/Enot.gif" alt="Иконка загрузки"/>
            </div>`;
            return this.el;
        }
        this.el.innerHTML = `
            <h1> Найдено книг - ${this.parentState.numFound}</h1>
        `
        const cardGrid = document.createElement('div');
        cardGrid.classList.add('card__grid');
        this.el.append(cardGrid);
        for (const card of this.parentState.list) {
            cardGrid.append(new Card(this.appState, card).render());
        }
        return this.el;
    }
}