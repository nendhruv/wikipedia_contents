export default class Service {
    constructor(language, title) {
        this.baseUrl = `https://${language}.wikipedia.org/api/rest_v1/page/metadata/${title}`
        this.fetchData();
    }

    fetchData() {
        const request = new XMLHttpRequest();

        request.onreadystatechange = function () {
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) {
                    console.log(JSON.parse(request.response));
                }
                else if (request.status === 400) {
                    console.log('There was an error 400');
                }
                else {
                    console.log('something else other than 200 was returned');
                }
            }
        };

        request.open("GET", `${this.baseUrl}`, true);
        request.send();
    }
}