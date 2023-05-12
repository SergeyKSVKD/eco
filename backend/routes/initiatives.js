const { Router } = require('express')
const router = Router()
const Initiatives = require('../models/initiativesModel')

// /initiatives/
router.get('/', async (req, res) => {
    try {
        const initiatives = await Initiatives.find()
        return res.json(initiatives)
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
})

module.exports = router