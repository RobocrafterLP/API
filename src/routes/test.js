const express = require("express")
const router = express.Router()
const Acces = [5, 9, 7]

router.get('/', (req, res) => {
    res.send("Please Add a user id after /")
})

router.get('/:user', (req, res) => {
    if (Acces.find(element => element == req.params.user)) {
        res.send(true)
    } else {
        res.send(false)
    }
})

module.exports = router