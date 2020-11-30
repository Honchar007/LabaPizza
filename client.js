class Client {
    getData(endpoint) {
        return fetch(`https://my-json-server.typicode.com/honchar007/test-json/${endpoint}`)
            .then(response => response.json());
    }
}

export default Client;
