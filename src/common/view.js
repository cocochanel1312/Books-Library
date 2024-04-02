//Родительский класс с методом рендер и методом дестрой нашей View

export class AbstractView {
    constructor() {
        this.app = document.getElementById('root');
    }

    setTitle(title) {
        document.title = title;
    }
    render() {
        return;
    }
    destroy() {
        return;
    }
}