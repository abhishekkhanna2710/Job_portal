const express = require('express');

const app = express();

const port = process.env.Port || 4000;

app.get("/", (req, res) => {
    res.send("Hello World to You");
})


app.listen(port, () => {
    console.log(`Server started at http//:localhost:${port}`)
})
