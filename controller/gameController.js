const { Game } = require('../models')
const {default: axios} = require('axios')

class GameController {
    static async fetchGames(req, res, next) {
        try {
            let { page } = req.query

            if(!page) {
                page = 1
            }

            const { data } = await axios({
                url: "https://api.rawg.io/api/games",
                method: 'GET',
                headers: {
                    "Accept-Encoding": "application/json",
                },
                params: {
                    key: process.env.APIKEY_RAWG,
                    page
                }
            }) 


            let games = data.results.map(el => {
                let temp = {
                    id: el.id,
                    title: el.name,
                    released_date: el.released,
                    rating: el.rating,
                    image_url: el.background_image,
                    price: 99000
                }
                return temp
            });

            res.status(200).json(games)
            
        } catch (err) {
            next(err)    
        }
    }
}

module.exports = GameController