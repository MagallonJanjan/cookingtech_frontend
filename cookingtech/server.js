const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/cookingtech'));

app.get('/*', (req, res) => {
    res.sendFile('index.html',
        { root: 'dist/cookingtech/' })
});