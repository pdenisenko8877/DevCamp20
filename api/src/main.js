const express = require('express');
const app = express();
const port = 5333;

app.get('/:name', (req, res) => {
    res.send(`Hello ${req.params.name}!`)
});

app.use( (req, res) => {
    res.status(404).send('Enter your name in the address bar (example: /Ann).');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
