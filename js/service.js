export default class Service {
    constructor(language, title) {
        this.language = language;
        this.title = title;
        this.baseUrl = `https://${this.language}.wikipedia.org/api/rest_v1/page/metadata/${this.title}`
        this.articleUrl = `https://${this.language}.wikipedia.org/wiki/${this.title}`
    }

    fetchData() {
        const request = new XMLHttpRequest();

        request.onreadystatechange = () => {
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) {
                    this.showData(JSON.parse(request.response), null);
                }
                else {
                    this.showData(null, 'There is no article for this topic on Wikipedia');
                }
            }
        };

        request.open("GET", `${this.baseUrl}`, true);
        request.send();
    }

    showData(data, error) {
        if (error) {
            document.querySelector('.title-content__wiki').innerText = error;
        }
        else {
            const content = data.toc;

            document.querySelector('.title-content__wiki').innerText = content.title;

            content.entries.forEach((element) => {
                const entry = document.createElement('div');
                const entryLink = document.createElement('a');
                entryLink.setAttribute('href', `${this.articleUrl}#${element.anchor}`);
                entryLink.setAttribute('target', `_blank`);
                entry.innerText = `${element.number} ${element.html}`
                entry.setAttribute('class', `level_${element.level}`)
                entryLink.appendChild(entry);

                document.querySelector('.title-content__wiki').appendChild(entryLink);
            });
        }
    }
}