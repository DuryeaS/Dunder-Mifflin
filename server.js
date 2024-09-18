const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const validUsername = "michael.scott@dundermifflin.com";
const validPassword = "RabiesAwarenessRun2021#!";
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Validate credentials
    if (username === validUsername && password === validPassword) {
        res.send('Login successful! Redirecting...');
    } else {
        res.send('Incorrect username or password.');
    }
});
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Users/hunter/login-app/index.html');
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:4000');
});

