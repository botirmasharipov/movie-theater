const express = require("express")
const app = express()

const port = 3000

app.listen(port, () => {
    console.log("Your server is listening on port " + port)
})
