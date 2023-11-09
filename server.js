const http = require('http');
const dotenv = require('dotenv');
const apiCall = require('./data/apiCall');
const fs = require('fs');

dotenv.config();

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(
        `<h1>ciao</h1>`
    )
    }).listen(port, host, () => {
        const serverUrl = `http://${host}:${port}`;
        console.log(`Server is running on ${serverUrl}`);
    });;