const Game = require('./gameClass')

class TourDuMonde extends Game {
    constructor(gameMode, name, playerList){
        super(name, playerList)
        this.gameMode = gameMode
    }
}

module.exports = TourDuMonde