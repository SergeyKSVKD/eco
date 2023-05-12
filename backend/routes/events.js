const { Router } = require('express')
const router = Router()
const Events = require('../models/eventsModel')

// /events/
router.get('/', async (req, res) => {
    try {
        const events = await Events.find()
        return res.json(events)
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
})

module.exports = router