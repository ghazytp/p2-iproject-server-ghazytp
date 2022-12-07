const router = require('express').Router()
const GameController = require('../controller/gameController')


router.get('/', (req, res) => {
    res.send('game')
})

router.get('/lists', GameController.fetchGames)

module.exports = router