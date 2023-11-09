const fs = require('fs');
const path = require('path');

function loadNorris() {
    const norrisPath = path.join(__dirname, "norrisDb.json");
    try {
        const norris = fs.readFileSync(norrisPath)
        return JSON.parse(norris);
    } catch (err) {
        console.log(err.message)
        return [];
    }
}

module.exports = loadNorris;
