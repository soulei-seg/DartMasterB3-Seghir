var readlineSync = require('readline-sync')
const Game = require('../classes/gameClass')
const TourDuMonde = require('../classes/TourDuMonde')


module.exports = {

    InitializeGame() {

        let win = false

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

                while(win == false){

                    //On parcours la liste des joueurs
                    for(i = 0; i < playerList.length; i++){
                        console.log('\n\nC\'est à votre tour de jouer ' + playerList[i].PlayerName +' !\n\n')

                        //Chaque joueur a 3 essais
                        for(j = 1; j < 4; j ++){
                                                        
                            let shot = readlineSync.question('Avez vous reussi votre lancer ' + j + ' ? [oui][non] : ')
                            while(shot != 'oui' && shot != 'non'){
                                console.log('Merci de bien repondre par oui ou non.\n')
                                shot = readlineSync.question('Avez vous reussi votre lancer ' + j + ' ? [oui][non] : ')
                            }
                            if(shot == 'oui'){
                                console.log('Bravo ' +  playerList[i].PlayerName + ' ! Vous gagnez 1 point.\n')
                                playerList[i].score += 1

                                //si le joueur arrive à 20 points
                                if(playerList[i].score == 20){
                                    console.log(playerList[i].PlayerName + ' a remporté cette partie !')
                                    playerList[i].GameWin += 1
                                    win = true
                                    break
                               }  
                            } 
                            
                            else if(shot == 'non'){
                                console.log('Dommage.. Vous ferez mieux la au prochain lancer.\n')
                            }

                            
                        }
                        console.log(playerList[i].PlayerName + ', votre score actuel vaut ' + playerList[i].score + '\n\n')
                        
                        //on quitte la boucle
                        if(win == true){
                            break
                        }
                    }
                }
                break



            case '301':
                console.log('Vous avez choisit le mode \'301\'')

                // chaque joueur démarre avec 301 points
                for(i = 0; i < playerList.length; i++){
                    playerList[i].score = 301
                }


                while(win == false){
                //On parcours la liste des joueurs
                    for(i = 0; i < playerList.length; i++){
                        console.log('\n\nC\'est à votre tour de jouer ' + playerList[i].PlayerName +' !\nScore actuel : ' + playerList[i].score + '\n\n')

                        //Chaque joueur a 3 essais
                        for(j = 1; j < 4; j ++){
                            let scoreDone = readlineSync.questionInt('Nombre de points pour le lancer ' + j + ' : ')

                            //Si le score est paire et que la soustraction du score à venir vaut 0
                            if(playerList[i].score == 2 && playerList[i].score - scoreDone == 0){
                                console.log('Vous avez gagné')
                                win = true
                                break
                            }

                            //si le score à venir est supérieur à 1
                            else if(playerList[i].score - scoreDone > 1){
                                playerList[i].score -= scoreDone
                                console.log('Votre score actuel vaut ' + playerList[i].score +'\n')
                            }

                            //si le score à venir est inférieur ou égal à 1
                            else if(playerList[i].score - scoreDone < 0 || playerList[i].score - scoreDone == 1){
                                console.log('Votre score ne peut pas être négatif ou égal à 1.\nVous devez également terminer votre tour final par un double.\nTour passé.\n')
                            }
                            else{
                                console.log('Vous devez terminer votre tour final par un double.\nTour passé.\n')
                            }
                        }
                        //on quitte la boucle
                        if(win == true){
                            break
                        }
                    }
                }
                break
            case 'Cricket':
                console.log('Vous avez choisit le mode \'Cricket\'')
                break
        }
    }
}