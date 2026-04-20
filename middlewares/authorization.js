function authorization(req, res, next) {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        res.setHeader('WWW-Authenticate', 'Basic')
        return res.status(401).send('Autenticação necessária')
    }

    const credentials = authHeader.split(' ')[1]
    const decoded = Buffer.from(credentials, 'base64').toString('utf-8')
    const [username, password] = decoded.split(':')

    if (username === 'admin' && password === 'admin') {
        return next()
    }

    res.setHeader('WWW-Authenticate', 'Basic')
    return res.status(401).send('Credenciais inválidas')
}

module.exports = authorization