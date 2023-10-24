const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const colors = require('colors');
const port = process.env.PORT;
const connectDB = require('./db')

dotenv.config();

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Express app listening on port ${port}`.bgBlue.white);
});
