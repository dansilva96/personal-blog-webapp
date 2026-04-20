const express = require('express')
const router = express.Router()

const articleController = require('../controllers/articleController')
const authMiddleware = require('../middlewares/authorization')

router.use(authMiddleware)

router.get('/', articleController.getDashboard)

router.get('/new', articleController.showCreateForm)
router.post('/new', articleController.createArticle)

router.get('/edit/:id', articleController.showEditForm)
router.post('/edit/:id', articleController.updateArticle)

router.get('/delete/:id', articleController.deleteArticle)

module.exports = router