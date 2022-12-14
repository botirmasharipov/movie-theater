const express = require("express")
const { Show, User } = require("../models/index")
const { check, validationResult } = require('express-validator')

const router = express.Router()

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

//TODO: Create your GET Request Route Below: 
router.get("/", async function (request, response) {
    const shows = await Show.findAll()
    response.json(shows)
})

router.get("/:id", async function (request, response) {
    const shows = await Show.findByPk(request.params.id)
    response.json(shows)
})

// GET shows of a particular genre (genre in req.params)
router.get("/genres/:genre", async function (request, response) {
    const shows = await Show.findAll({ where: { genre: request.params.genre } })
    response.json(shows)
})

// UPDATE the status of a show /shows/4/watched
// Update the status of a show from "cancelled" to "on-going" or visa versa
router.put('/:id/updates', [check("status").not().trim().isEmpty().trim().isLength({ min: 5, max: 25 }).trim()],
    async (req, res) => {
        const findShow = await Show.findByPk(req.params.id)
        await Show.update(req.body, {
            where:
            {
                id: findShow.id
            }
        })
        res.json(await Show.findAll())
    })

// Update the rating
router.put('/:id/watched', [check("rating").not().trim().isEmpty().trim()], async (req, res) => {
    const show = await Show.findByPk(req.params.id)
    await Show.update(req.body, {
        where:
        {
            id: show.id
        }
    })
    res.json(await Show.findAll())
})

// DELETE
router.delete('/:id', async (req, res) => {
    await Show.destroy({
        where:
        {
            id: req.params.id
        }
    })
    res.json(await Show.findAll())
})


module.exports = router