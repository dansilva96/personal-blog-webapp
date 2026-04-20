const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

const publicRoutes = require('./routes/public')
const adminRoutes = require('./routes/admin')
const authMiddleware = require('./middlewares/authorization')

app.use('/', publicRoutes)
app.use('/admin', authMiddleware, adminRoutes)

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
})