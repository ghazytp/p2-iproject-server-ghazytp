const { User, Transaction } = require('../models')
const { createToken, comparePassword } = require('../helpers/helpers')

class UserController {
    static async login(req, res, next) {
        try {
            const { email, password} = req.body

            if (!email || !password) {
                throw {name: "BAD_REQUEST" }
            }

            const userLogin = await User.findOne({where: {email}})

            if (!userLogin) {
                throw {name: "INVALID_CREDENTIALS"}
            }

            if(!comparePassword(password, userLogin.password)) {
                throw {name: "INVALID_CREDENTIALS"}
            }

            const access_token = createToken({id: userLogin.id})

            res.status(200).json({access_token})

        } catch (err) {
            next(err)   
        }

    }

    static async register(req, res, next) {
        try {
            const { email, password, address } = req.body

            if (!email || !password) {
                throw {name: "BAD_REQUEST" }
            }

            const newUser = await User.create({
                email,
                password,
                address
            })
            res.status(201).json({id: newUser.id, email: newUser.email})
        } catch (err) {
            next(err)
        }
    }

    static async buyGame(req, res, next) {
        try {
            const { id } = req.params 

            


            
        } catch (err) {
            
        }
    }

    static async handleMyGame(req, res, next) {
        try {
            
        } catch (err) {
            
        }
    }
}

module.exports = UserController