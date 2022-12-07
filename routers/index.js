const router = require('express').Router()


const userRoute = require('./userRoutes')
const gameRoute = require('./gamesRoute')

router.use('/users', userRoute)
router.use('/games', gameRoute)

router.get('/', (req, res) => {
    res.send('Hello World!')
})


module.exports = router