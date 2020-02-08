import Service from './service.js';

export default class Content {
    constructor(){
        this.form = document.querySelector('.content-form__wiki');
        this.updateContent();
    }

    updateContent() {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            document.querySelector('.title-content__wiki').innerText = 'Loading ... ';
            document.querySelector('.title-index-content__wiki').innerText = '';
            const language = document.querySelector('.language__wiki').value;
            const title = document.querySelector('.title__wiki').value;
            const service  = new Service(language, title);
            service.fetchData();
            if (language === 'ar' || language === 'ur') {
                document.querySelector('.content-box__wiki').classList.add('rtl__wiki');
                document.querySelector('.content-box__wiki').classList.remove('ltr__wiki');
            }
            else {
                document.querySelector('.content-box__wiki').classList.add('ltr__wiki');
                document.querySelector('.content-box__wiki').classList.add('rtl__wiki');
            }
        });
    }
}