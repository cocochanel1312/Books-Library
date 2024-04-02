import { AbstractView } from "../../common/view.js";
import onChange from "on-change";

// mainView унаслдедует родительский класс AbstractView
// Главная страница
export class MainView extends AbstractView {
    state = {
        list: [],
        loading: false,
        searchQuery: undefined,
        offset: 0
    }

    constructor(appState) {
        super(); // метод super() вызывает родительский конструктор
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this)); // Подписались на обновление state
        this.setTitle('Поиск книг');
    }

    appStateHook(path) { // Путь обновления state
        if(path === 'favorites') {
            console.log(path);
        }
    }

    render() {
        const main = document.createElement('div');
        main.innerHTML = `Число книг: ${this.appState.favorites.length}`;
        this.app.innerHTML = '';
        this.app.append(main);
        this.appState.favorites.push('d');
    }
}