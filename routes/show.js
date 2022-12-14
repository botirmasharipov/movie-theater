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

router.get("/:id", async function (request, response) {
    const shows = await Show.findByPk(request.params.id)
    response.json(shows)
})



// UPDATE the status of a show
router.put('/:status', async (req, res) => {
    const findShow = await Show.findByPk(req.params.status)
    await Show.update(req.body, {
        where:
        {
            status: findShow.status
        }
    })
    res.json(await Show.findAll())
})

// Update the rating
router.put('/:rating', async (req, res) => {
    const findShow = await Show.findByPk(req.params.rating)
    await Show.update(req.body, {
        where:
        {
            rating: findShow.rating
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