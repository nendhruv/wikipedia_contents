import Service from './service.js';

export default class Content {
    constructor(){
        this.form = document.querySelector('.content-form__wiki');
        this.updateContent();
    }

    updateContent() {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            const language = document.querySelector('.language__wiki').value;
            const title = document.querySelector('.title__wiki').value;
            new Service(language, title);
        });
    }
}