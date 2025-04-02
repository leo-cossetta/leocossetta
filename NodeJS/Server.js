const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <!DOCTYPE html>
            <head>
                <title>Inserisci testo</title>
            </head>
            <body>
                <h1>Testo</h1>
                <input type="text" id="textInput" placeholder="Inserisci testo..." />
                <button onclick="stampa()">Stampa</button>
                <div id="output"></div>
                <script>
                    function stampa() {
                        const testo = document.getElementById('textInput').value;
                        document.getElementById('output').innerText = testo;
                    }
                </script>
            </body>
        </html>
    `);
});
const port = 5000;
const host = '127.0.0.1';
server.listen(port, host , () => {
    console.log("Server attivo...");
});
