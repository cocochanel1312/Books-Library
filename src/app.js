import { MainView } from "./views/main/main";

// App отвечает за роутинг, чтобы загрузить правильную view
class App {
    routes = [
        {path: "", view: MainView} // путь и ссылка на наш view
    ];
    appState = { //Глобальный state, который работает с favorites
        favorites: []
    };

    // Конструктор обрабатывабщий смену ХЭШа
    constructor () {
        window.addEventListener('hashchange', this.route.bind(this)) // используем когда при навегировании сменился ХЭШ
        this.route();
    }


    route() { // функция роутинга
        if (this.currentView){
            this.currentView.destroy();
        }
        const view = this.routes.find(r => r.path == location.hash).view;
        this.currentView = new view(this.appState);
        this.currentView.render();
    }
}

new App();