const fs = require('fs');
const path = require('path');
const apiCall = require('./apiCall')

function saveNorris(data) {
    const norrisPath = path.join(__dirname, "norrisDb.json");
    const apiData = apiCall();

    try {
        const json = JSON.stringify(apiData.value);
        fs.writeFileSync(norrisPath, json);
    } catch (err) {
        console.log(err.message)
        return [];
    }
}

module.exports = saveNorris;
