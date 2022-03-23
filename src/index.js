const express = require("express")
const app = express()

app.use(express.json())

//const sub = require('./routes/test')
//app.use('/', sub)

app.get('/', (req, res) => {
  req.send("Please Add a user id after /")
})
app.listen(3000, () => console.log("Online"))
