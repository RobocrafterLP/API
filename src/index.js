const express = require("express")
const app = express()

app.use(express.json())

const sub = require('./routes/test')
app.use('/', sub)

app.listen(3000, () => console.log("Online"))