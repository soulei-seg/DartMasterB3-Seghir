const router = require('express').Router()
const PlayerRouter = require('./games/playerRouter')
const GameRouter = require('./games/gameRouter')




router.use('/players', PlayerRouter)
router.use('/games', GameRouter)

module.exports = router
