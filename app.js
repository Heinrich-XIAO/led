const express = require("express");
let app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
let state = 0;
app.listen(port, () => {
  console.log(`Starting server at {port}`);
});
app.use(express.static('public'));

app.get('/on', (req, res) => {
    state = 1;
    console.log(1);
    res.json({ status: 200 });
});

app.get('/off', (req, res) => {
    state = 0;
    console.log(0)
    res.json({ status: 200 });
});

app.get('/get', (req, res) => {
    res.json({state})
})