const { Router } = require('express')
const router = Router()
const Stuf = require('../models/stufModel')

// /stuf/
router.get('/', async (req, res) => {
    try {
        const stuf = await Stuf.find()
        return res.json(stuf)
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
})

module.exports = router