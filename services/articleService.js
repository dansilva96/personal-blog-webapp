const fs = require('fs').promises
const path = require('path')

const dir = path.join(__dirname, '../data-articles')

async function getNextId() {
    const articles = await getAllArticles()

    if (articles.length === 0) return 1

    const maxId = Math.max(...articles.map(a => a.id))
    return maxId + 1
}

async function getAllArticles() {
    try {
        const files = await fs.readdir(dir)
        const articles = []

        for (const file of files) {
            const filePath = path.join(dir, file)
            const content = await fs.readFile(filePath, 'utf8')
            const data = JSON.parse(content)
            articles.push(data)
        }

        articles.sort((a, b) => b.id - a.id)

        return articles
    } catch (error) {
        console.error('Erro ao listar artigos:', error.message)
        return []
    }
}

async function getArticleById(id) {
    try {
        const filePath = path.join(dir, `${id}.json`)
        const content = await fs.readFile(filePath, 'utf8')
    
        return JSON.parse(content)
    } catch (error) {
        console.error('Erro ao ler artigo:', error.message)
        return null
    }
}

async function createArticle({ title, content, date }) {
    try {
        const id = await getNextId()

        const newArticle = {
            id,
            title,
            content,
            date
        }

        const filePath = path.join(dir, `${id}.json`)
        await fs.writeFile(filePath, JSON.stringify(newArticle, null, 2))

        return newArticle
    } catch (error) {
        console.error('Erro ao criar artigo:', error.message)
        return null
    }
}

async function updateArticle(id, { title, content, date }) {
    try {
        const filePath = path.join(dir, `${id}.json`)

        const updatedArticle = {
            id: Number(id),
            title,
            content,
            date
        }
        await fs.writeFile(filePath, JSON.stringify(updatedArticle, null, 2))

        return updatedArticle
    } catch (error) {
        console.error('Erro ao atualizar artigo:', error.message)
        return null
    }
}

async function deleteArticle(id) {
    try {
        const filePath = path.join(dir, `${id}.json`)
        await fs.unlink(filePath)
        return true

    } catch (error) {
        console.error('Erro ao deletar artigo:', error.message)
        return false
    }
}

module.exports = {
    getAllArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
}
