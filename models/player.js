const playerSchema = mongoose.Schema ({
    _id: mongoose.Schema.ObjectId,
    id: String,
    playerName: String,
    score: Number,
    playerEmail: String,
    gameWin: Number,
    gameLost: Number,
    createdAt: Date
},
{
    collection: 'Players'
})

let player = mongoose.model('player', playerSchema)
let mongo_url = mongoose.connect('mongodb://localhost:27017/DartDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

var db = mongoose.connection //ou connections?
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

module.exports = {

    get: async(playerId) => {
        var response = player.findOne({"id": playerId})
        return await response
    },

    post: async(params) => {
        var newId = require('uuid').v4()
        console.log(params)
        var newPlayer = player({
            id: newId,
            playerName: params.playerName,
            score: params.score,
            playerEmail: params.playerEmail,
            gameWin: player.gameWin,
            gameLost: player.gameLost,
            createdAt: Date()
        })

        newPlayer.save()
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
    },
    
    patch: async(playerId, params) => {
        const updatePlayer = await player.findOne({"id": playerId})
        updatePlayer.playerName = params.playerName
        updatePlayer.score = params.score
        updatePlayer.playerEmail = params.playerEmail
        updatePlayer.gameWin = params.gameWin
        updatePlayer.gameLost = params.gameLost
        updatePlayer.createdAt = params.createdAt
        await upPlayer.save()
    },

    delete: async(playerId) => {
        console.log(playerId)
        await player.deleteOne({"id": playerId})
    }
}