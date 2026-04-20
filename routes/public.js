const express = require('express')
const router = express.Router()

const articleController = require('../controllers/articleController')

router.get('/', articleController.getHome)
router.get('/article/:id', articleController.getArticlePage)

module.exports = router