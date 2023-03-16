const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    res.end('Hello world')
})

app.listen(3000, () => console.log('node is running on port: ',3000))