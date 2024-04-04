import { DivComponent } from "../../common/div-component";
import './card-list.css'


//Создание списка карточек для отображения
export class CardList extends DivComponent {
    constructor(appState, parentState) { 
        super();
        this.appStatestate = appState; // Используем для обновления состояния "Избранное"
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
        this.el.classList.add('card_list');
        this.el.innerHTML = `
            <h1> Найдено книг - ${this.parentState.list.length}</h1>
        `
        return this.el;
    }
}