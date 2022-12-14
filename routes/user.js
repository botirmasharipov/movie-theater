const express = require("express")
const { User, Show } = require("../models/index")

const router = express.Router()

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

//TODO: Create your GET Request Route Below: 
router.get("/", async function (request, response) {
    const users = await User.findAll()
    response.json(users)
})

// Get one user
router.get("/:id", async function (request, response) {
    const user = await User.findByPk(request.params.id)
    response.json(user)
})

// GET all shows watched by a user (user id in req.params)
router.get("/:id/shows", async function (request, response) {
    const user = await User.findByPk(request.params.id, {
        include: Show
    })
    response.json(user.shows)
})

// PUT update and add a show if a user has watched it
router.put('/:id/shows/:showId', async (req, res) => {
    let user = await User.findByPk(req.params.id)
    const show = await Show.findByPk(req.params.showId)
    await user.addShow(show)
    res.json(await User.findAll({ include: Show }))
})

module.exports = router

