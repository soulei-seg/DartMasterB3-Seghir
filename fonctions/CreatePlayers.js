var shuffle = require('shuffle-array')
var readlineSync = require('readline-sync')
const Player = require('../classes/playerClass')


module.exports = {

    InitializePlayers() {
        //liste des joueurs
        playerList = []

        //Nombre de joueurs
        let playerNumber = readlineSync.questionInt('Nombre de joueurs : ')
        while(playerNumber <= 1){
            playerNumber = readlineSync.question('2 joueurs minimum !\nNombre de joueurs : ')
        }

        //On créer les joueurs puis on les stock dans la liste
        for(i=1; i <= playerNumber; i++){
            let playerName = readlineSync.question('Nom du joueur ' + i + ' : ')
            let playerEmail = readlineSync.questionEMail('Mail du joueur ' + i + ' : ')
            let newPlayer = new Player(i, playerName, playerEmail)
            playerList.push(newPlayer)
        }
        //On range les joueurs dans un ordre aléatoire
        shuffle(playerList)
    }
}
