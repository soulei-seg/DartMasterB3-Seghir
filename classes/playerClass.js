class Player {
    constructor(id, playerName, playerEmail){
        this.id = id,
        this.PlayerName = playerName,
        this.score = 0,
        this.playerEmail = playerEmail,
        this.gameWin = 0,
        this.gameLost = 0,
        this.createdAt = new Date()
    }
}

module.exports = Player