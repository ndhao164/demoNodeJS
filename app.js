import express from 'express';
import {userController} from "./controller/user.controller.js";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger-output.json" assert { type: "json" };
import {awsController} from "./controller/aws.controller.js";
import bodyParser from 'body-parser';
import basicAuth from 'express-basic-auth';

export const app = express();
const port = 3000

app.use(
    "/api-docs",
    basicAuth({
        users: {'a': 'a'},
        challenge: true,
    }),
    swaggerUi.serve,
    swaggerUi.setup(swaggerFile)
);

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send('Hello World!')
})


userController(app)
awsController(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})