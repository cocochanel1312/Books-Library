import { DivComponent } from "../../common/div-component";
import './search.css';

export class Search extends DivComponent {
    constructor(state) { // Создали state для поисковика, который при запросе в поиске обновит состояние страницы
        super();
        this.state = state
    }

// Верстка поисковика на странице
    render() {
        this.el.classList.add('search'); // задали дефольный класс компоненту 'search'
        this.el.innerHTML = ` 
            <div class="search__wrapper">
                <input 
                    type="text" 
                    placeholder="Найти книгу или автора..."
                    class="search__input"
                    value="${this.state.searchQuery ? this.state.searchQuery : ''}"
                />
                <img src="/static/SearchLogo.svg" alt="Иконка поиска"/>
            </div> 
            <button aria-label="Искать"> 
                <img src="/static/SearchLogo2.svg" alt="Иконка поиска 2"/>
            </button
        `; // В value указали, в случае елси searchQuery имеет значение, оно его выводит, если нет, то получаем пустое значение
        return this.el;
    }
}