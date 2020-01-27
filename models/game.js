const mongoose = require('mongoose')

const gameSchema = mongoose.Schema ({
    _id: mongoose.Schema.ObjectId,
    name: String,
    playerList: Array,
    date: Date
},
{
    collection: 'Games'
})

let game = mongoose.model('game', gameSchema)
let mongo_url = mongoose.connect('mongodb://localhost:27017/DartDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

var db = mongoose.connection //ou connections?
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

module.exports = {

    get: async(gameId) => {
        var response = game.findOne({"id": id})
        return await response
    },

    post: async(params) => {
        var newId = require('uuid').v4()
        console.log(params)
        var newGame = game({
            id: newId,
            name: params.name,
            playerList: params.playerList,
            createdAt: Date()
        })

        newGame.save()
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
    },
    
    patch: async(gameId, params) => {
        const updateGame = await game.findOne({"id": gameId})
        updateGame.name = params.name
        updateGame.playerList = params.playerList
        updateGame.createdAt = params.createdAt
        await upGame.save()
    },

    delete: async(gameId) => {
        console.log(gameId)
        await game.deleteOne({id: gameId})
    }
}