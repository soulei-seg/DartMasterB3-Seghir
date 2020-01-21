var readlineSync = require('readline-sync')
const Game = require('../classes/gameClass')
const TourDuMonde = require('../classes/TourDuMonde')


module.exports = {

    InitializeGame() {
        const playerList = require('../main')
        //Création de la Game
        let gameName = readlineSync.question('Saisissez un nom pour la partie : ')
        let game = new Game(gameName, playerList)

        //Sélection du mode de jeu
        let mode = readlineSync.questionInt('Modes de jeu disponibles :\n- Tour du monde [1]\n- 301 [2]\n- Cricket [3]\n\nVotre choix : ')
        while(mode != 1 && mode != 2 && mode != 3){
            mode = readlineSync.question('Veuillez choisir votre mode de jeu en saisissant 1, 2 ou 3 : ')
        }

        // On gère le nom du mode associé à l'option saisit
        if(mode == 1){
            mode = 'Tour du Monde'
        }else if(mode == 2){
            mode = '301'
        }else if(mode == 3){
            mode = 'Cricket'
        }

        let gameMode = new TourDuMonde(mode, gameName, playerList)

        //En fonction du mode choisit
        switch(mode){
            case 'Tour du Monde':
                console.log('Vous avez choisit le mode \'Tour du Monde\'')
                console.log(gameMode)
                break
            case '301':
                console.log('Vous avez choisit le mode \'301\'')
                break
            case 'Cricket':
                console.log('Vous avez choisit le mode \'Cricket\'')
                break
        }
    }
}