module.exports = function (app) {
    app.get('/', (req, res) => {
        res.render('home')
    })
    app.get('/search', (req, res) => {
        console.log(req.query)
        res.render('search')
    })
}