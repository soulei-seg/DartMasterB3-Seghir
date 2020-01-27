const express = require('express')
const router = express.Router()
const Player  = require('../../models/player')


router.get('/', function(req, res, next){
    console.log('route de base')
    Player.get().then((response) => {
        res.format({
            json:() => {
                res.send({
                    data: response
                })
            }
        })
    }).catch(next)
})

router.get('/players', function(req, res, next){
    console.log('players')
    Player.getAll().then((response) => {
        res.format({
            json:() => {
                res.send({
                    data: response
                })
            }
        })
    }).catch(next)
})

//router.post('/players', function(req, res, next) => {
//    
//})

router.get('/players/:id', (req, res, next) => {
    console.log("get player id")
    Player.get(req.params.id).then((player) => {
        console.log(player)
        if(!player) return next()
        res.format({
            json: () => res.send({
                data: player
            })
        })
    })
})

router.get('/players/:id/edit', (req, res, next) => {
    console.log("edit player id")
    Player.get(req.params.id).then((player) => {
        console.log(player)
        if(!player) return next()
        res.format({
            json: () => res.send({
                data: player
            })
        })
    })
})

router.get('/players/new', function(req, res, next) {
    Player.get().then((response) => {
        res.format({
            json:() => {
                res.send({
                    data: response
                })
            }
        })
    }).catch(next)
})

//router.patch('players/:id', (req, res, next) => {
//    res.send('Editer les infos d\'un joueur')
//})

router.delete('/players/:id', (req, res, next) => {
    Player.remove(req.params.id).then(() => {
        res.format({
            json: () => { res.status(200).send({ message: 'success'})}, 
            'text/html': function(){
                res.redirect("/players")
            }
        })
    }).catch(next)
})

module.exports = router