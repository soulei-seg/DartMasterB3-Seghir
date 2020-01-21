const CreatePlayers = require('./fonctions/CreatePlayers')
const CreateGame = require('./fonctions/CreateGame')

CreatePlayers.InitializePlayers()
module.exports = playerList

CreateGame.InitializeGame()