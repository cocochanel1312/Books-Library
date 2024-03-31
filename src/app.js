import { MainView } from "./views/main/main";

class App {
    routes = [
        {path: "", view: MainView} // путь и ссылка на наш view
    ];

    // Конструктор обрабатывабщий смену ХЭШа
    constructor () {
        window.addEventListener('hashchange', this.route.bind(this)) // используем когда при навегеровании сменился ХЭШ
        this.route();
    }


    route() { // функция роутинга
        if (this.currentView){
            this.currentView.destroy();
        }
        const view = this.routes.find(r => r.path == location.hash).view;
        this.currentView = new view();
        this.currentView.render();
    }
}

new App();