const http = require('http');
const dotenv = require('dotenv');
const apiCall = require('./data/apiCall.js')
const loadNorris = require('./data/loadNorris.js')
const fs = require('fs');

dotenv.config();

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

http.createServer(function (req, res) {
    apiCall(function (data) {
        const array = loadNorris();
        array.push(data.value);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data.value)
        fs.writeFileSync("./data/norrisDb.json", JSON.stringify(array))
    })
    }).listen(port, host, () => {
        const serverUrl = `http://${host}:${port}`;
        console.log(`Server is running on ${serverUrl}`);
    });