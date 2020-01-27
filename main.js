const CreatePlayers = require('./fonctions/CreatePlayers')
const CreateGame = require('./fonctions/CreateGame')
const app = require('express')()
const router = require('./Routers/Router')
app.use(router)
const mongoose = require('mongoose')
const Player = require('./models/player')

//Connexion à la bdd
mongoose.connect('mongodb://localhost:27017/DartGame', { useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database.'))
app.listen(3000, () => console.log('server started.'))

//Création des joueurs
CreatePlayers.InitializePlayers()
module.exports = playerList

//Création de la partie
CreateGame.InitializeGame()