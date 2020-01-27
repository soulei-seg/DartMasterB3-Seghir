const Game = require('./game')

class TourDuMonde extends Game {
    constructor(mode, name, playerList){
        super(name, playerList)
        this.mode = mode
    }
}

module.exports = TourDuMonde