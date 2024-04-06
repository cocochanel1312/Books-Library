import { AbstractView } from "../../common/view.js";
import onChange from "on-change";
import { Header } from "../../components/header/header.js";
import { CardList } from "../../components/card-list/card-list.js";


// Страница с избранным
export class FavoritesView extends AbstractView {
    constructor(appState) {
        super(); // метод super() вызывает родительский конструктор
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this)); // Подписались на глобальное обновление appState (избранное)
        this.setTitle('Мои книги');
    }

    destroy() { // метод destroy позволяет отписаться от обновления состояния объекта
        onChange.unsubscribe(this.appState);
    }

    appStateHook(path) { // Обновление списка избранного
        if(path === 'favorites') {
            this.render()
        }
    }

    // Отображение 
    render() {
        const favorites = document.createElement('div');
        favorites.innerHTML = `
            <h1> Избранные книги </h1>
        `
        favorites.append(new CardList(this.appState, {list: this.appState.favorites}).render());
        this.app.innerHTML = '';
        this.app.append(favorites);
        this.renderHeader();
    }
    
    // Используем для рендера исключительно renderHeader
    renderHeader () {
        const header = new Header(this.appState).render();
        this.app.prepend(header);
    }
}