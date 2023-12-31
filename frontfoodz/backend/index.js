const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const colors = require('colors');
const port = process.env.PORT;
const connectDB = require('./db')
connectDB();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next();
})

app.use(express.json())
app.use('/api', require("./Routes/CreateUser"))
app.use('/api', require("./Routes/DisplayData"))
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Express app listening on port ${port}`.bgBlue.white);
});
