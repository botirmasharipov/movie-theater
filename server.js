const express = require("express")
const app = express()
const showRouter = require('./routes/show')
const userRouter = require('./routes/user')

const { db } = require("./db")

const port = 3000

app.use('/shows', showRouter)
app.use('/users', userRouter)

app.listen(port, () => {
    db.sync()
    console.log("Your server is listening on port " + port)
})
