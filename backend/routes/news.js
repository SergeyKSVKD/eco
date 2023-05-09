const { Router } = require('express')
const router = Router()
const News = require('../models/newsModel')

// /news/
router.get('/', async (req, res) => {
    try {
        const news = await News.find()
        return res.json(news)
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
})

module.exports = router