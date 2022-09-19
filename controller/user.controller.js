import express from 'express';
import {registerUser} from "../service/user.service.js";


const user = express.Router()


user.post('/register', (req, res, next) => {
    /*  #swagger.parameters['user'] = {
                in: 'body',
                description: 'Register user',
                schema: {
                    $username: 'username',
                    $password: 'password,
                }
        } */
    return registerUser(req.body).then(result => res.status(200).json(result)).catch(e => console.log(e))
} )

export function userController(app) {
    app.use('/user', user)
}