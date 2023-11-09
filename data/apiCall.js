function fetchData(onSuccess) {
    fetch(`https://api.chucknorris.io/jokes/random`)
        .then(response => response.json())
        .then((data) => {
            onSuccess(data);
        });
};

module.exports = fetchData;
