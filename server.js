const http = require('http');
const dotenv = require('dotenv');
const apiCall = require('./data/apiCall');
const loadNorris = require('./data/loadNorris');

dotenv.config();

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

http.createServer(function (req, res) {

    apiCall(function(data) {
        console.log(data);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data.value)
    });
    }).listen(port, host, () => {
        const serverUrl = `http://${host}:${port}`;
        console.log(`Server is running on ${serverUrl}`);
    });;