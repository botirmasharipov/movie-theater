const express = require("express")
const app = express()
const showRouter = require('./routes/show')
const { db } = require("./db")

const port = 3000

app.use('/shows', showRouter)

app.listen(port, () => {
    db.sync()
    console.log("Your server is listening on port " + port)
})
