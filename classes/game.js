class Game {
    constructor(name, playerList){
        this.id = require('uuid').v4()
        this.name = name
        this.playerList = playerList
        this.date = Date()
    }
}

module.exports = Game