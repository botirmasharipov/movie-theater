const express = require("express")
const { User } = require("../models/index")

const router = express.Router()

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

//TODO: Create your GET Request Route Below: 
router.get("/", async function (request, response) {
    const users = await User.findAll()
    response.json(users)
})
module.exports = router
