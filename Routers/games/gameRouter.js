const express = require('express')
const router = express.Router()
const Game  = require('../../models/game')

router.get('/games', function(req, res, next){
    console.log('players')
    Game.getAll().then((response) => {
        res.format({
            json:() => {
                res.send({
                    data: response
                })
            }
        })
    }).catch(next)
})

router.get('/games/new', function(req, res, next) {
    Game.get().then((response) => {
        res.format({
            json:() => {
                res.send({
                    data: response
                })
            }
        })
    }).catch(next)
})

//router.post('/games', function(req, res, next) => {
//    
//})

router.get('games/:id', (req, res, next) => {
    console.log("get game id")
    Game.get(req.params.id).then((game) => {
        console.log(game)
        if(!game) return next()
        res.format({
            json: () => res.send({
                data: game
            })
        })
    })
})

router.get('games/:id/edit', (req, res, next) => {
    console.log("edit game id")
    Game.get(req.params.id).then((game) => {
        console.log(game)
        if(!game) return next()
        res.format({
            json: () => res.send({
                data: game
            })
        })
    })
})

//router.patch('games/:id', (req, res, next) => {
//    res.send('Editer les infos d\'une game')
//})

router.delete('/games/:id', (req, res, next) => {
    Game.remove(req.params.id).then(() => {
        res.format({
            json: () => { res.status(200).send({ message: 'success'})}, 
            'text/html': function(){
                res.redirect("/games")
            }
        })
    }).catch(next)
})

router.get('/games/:id/players', (req, res, next) => {
    console.log("edit players accord to game id")
    Game.get(req.params.id).then((game) => {
        console.log(game)
        if(!game) return next()
        res.format({
            json: () => res.send({
                data: game
            })
        })
    })
})

//router.post('/games/:id/players', function(req, res, next) => {
//    
//})

router.delete('/games/:id/players', (req, res, next) => {
    Game.remove(req.params.id).then(() => {
        res.format({
            json: () => { res.status(200).send({ message: 'success'})}, 
            'text/html': function(){
                res.redirect("/games")
            }
        })
    }).catch(next)
})

//router.post('/games/:id/shots', function(req, res, next) => {
//    
//})

router.delete('/games/:id/shots/previous', (req, res, next) => {
    Game.remove(req.params.id).then(() => {
        res.format({
            json: () => { res.status(200).send({ message: 'success'})}, 
            'text/html': function(){
                res.redirect("/games")
            }
        })
    }).catch(next)
})

module.exports = router
