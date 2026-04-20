const articleService = require('../services/articleService')

async function getHome(req, res) {
    const articles = await articleService.getAllArticles()
    
    res.render('public/home', { articles })
}

async function getArticlePage(req, res) {
    const { id } = req.params
    
    const article = await articleService.getArticleById(id)

    if (!article) {
        return res.status(404).send('Artigo não encontrado')
    }
    
    res.render('public/article', { article })
}

async function getDashboard(req, res) {
    const articles = await articleService.getAllArticles()

    res.render('admin/dashboard', { articles })
}

async function createArticle(req, res) {
    const { title, content, date } = req.body

    await articleService.createArticle({
        title,
        content,
        date
    })

    res.redirect('/admin')
}

function showCreateForm(req, res) {
    res.render('admin/form', { article: null })
}

async function showEditForm(req, res) {
    const { id } = req.params

    const article = await articleService.getArticleById(id)

    if (!article) {
        return res.status(404).send('Artigo não encontrado')
    }

    res.render('admin/form', { article })
}

async function updateArticle(req, res) {
    const { id } = req.params
    const { title, content, date } = req.body

    await articleService.updateArticle(id, {
        title,
        content,
        date
    })

    res.redirect('/admin')
}

async function deleteArticle(req, res) {
    const { id } = req.params

    await articleService.deleteArticle(id)

    res.redirect('/admin')
}

module.exports = {
    getHome,
    getArticlePage,
    getDashboard,
    createArticle,
    showCreateForm,
    showEditForm,
    updateArticle,
    deleteArticle
}