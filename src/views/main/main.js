import { AbstractView } from "../../common/view.js";
import onChange from "on-change";
import { Header } from "../../components/header/header.js";
import { Search } from "../../components/search/search.js";

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
        this.appState = onChange(this.appState, this.appStateHook.bind(this)); // Подписались на глобальное обновление appstate (избранное)
        this.state = onChange(this.state, this.stateHook.bind(this)); // Подписались на локальное обновление state (поисковик)
        this.setTitle('Поиск книг');
    }

    appStateHook(path) { // Путь обновления state
        if(path === 'favorites') {
            console.log(path);
        }
    }

    async stateHook(path) { // реактивность для поисковика
        if(path === 'searchQuery') {
            this.state.loading = true;
            const data = await this.loadList(this.state.searchQuery, this.state.offset);
            this.state.loading = false;
            this.state.list = data.docs
        }
    }

    async loadList(q, offset) { // Загрузчик книг
        const res = await fetch (`https://openlibrary.org/search.json?q=${q}&offset=${offset}`);
        return res.json();
    }
    
    // Отображение 
    render() {
        const main = document.createElement('div');
        main.append(new Search(this.state).render()); // Добавили наш поисковик, а также передали лоакльное состояние state и вызвали его
        this.app.innerHTML = '';
        this.app.append(main);
        this.renderHeader();
    }
    
    // Используем для рендера исключительно renderHeader
    renderHeader () {
        const header = new Header(this.appState).render();
        this.app.prepend(header);
    }
}