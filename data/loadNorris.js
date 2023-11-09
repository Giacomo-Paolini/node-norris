const fs = require('fs');
const path = require('path');

function loadNorris() {

    const filePath = path.join(__dirname, "norrisDb.json");
        try {
            const jsonData = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(jsonData);
        } catch (err) {
            console.log(err.message);
            return [];
        }
    };

module.exports = loadNorris;
