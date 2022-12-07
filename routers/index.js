const router = require('express').Router()


const userRoute = require('./userRoutes')
const gameRoute = require('./gamesRoute')

router.use('/users', userRoute)
router.use('/games', gameRoute)

router.use((req, res) => {res.status(404).json({message: "PAGE NOT FOUND"})})


module.exports = router