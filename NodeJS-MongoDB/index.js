const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.connect("mongodb+srv://********:*********@********.********.mongodb.net/")
    .then(() => console.log("Connesso"))
    .catch((err) => console.log("Errore: impossibile connettersi a MongoDB", err));
const schema = new mongoose.Schema({
    testo: String,
    numero: Number
});
const Dato = mongoose.model('Dato', schema);
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Inserimento dati</title>
            </head>
            <body>
                <h1>Inserisci Dati</h1>
                <form action="/submit" method="POST">
                    <input type="text" name="testo" placeholder="Testo..." required />
                    <input type="number" name="numero" placeholder="Numero..." required />
                    <button type="submit">Inserisci</button>
                </form>
            </body>
        </html>
    `);
});
app.post('/submit', async (req, res) => {
    const { testo, numero } = req.body;
    try {
        const newDato = new Dato({ testo, numero });
        await newDato.save();
        res.send(`<h1> Inserito correttamente </h1>`);
    } catch (err) {
        console.error(err);
        res.send(`<h1> Errore: impossibile inserire </h1>`);
    }
});
const port = Math.floor(Math.random() * (7000 - 3000 + 1)) + 3000;
app.listen(port, () => {
    console.log(`Server attivo [porta: ${port}]`);
});
process.on('SIGINT', async () => {
    console.log("Arresto del server...");
    await mongoose.disconnect();
    console.log("Disconnesso");
    process.exit(0);  
});
