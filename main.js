const CreatePlayers = require('./fonctions/CreatePlayers')
const CreateGame = require('./fonctions/CreateGame')

//Création des joueurs
CreatePlayers.InitializePlayers()
module.exports = playerList

//Création de la partie
CreateGame.InitializeGame()