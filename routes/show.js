const express = require("express")
const { Show } = require("../models/index")

const router = express.Router()

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

//TODO: Create your GET Request Route Below: 
router.get("/", async function (request, response) {
    const shows = await Show.findAll()
    response.json(shows)
})
module.exports = router