import swaggerAutogen from 'swagger-autogen'

const doc = {
    info: {
        title: 'My API',
        description: 'Description',
    },
    host: 'localhost:3000',
    schemes: ['http'],
};

const options = {
    autoBody: true,
    autoHeaders: true
}

const outputFile = './swagger-output.json';
const endpointsFiles = ['./controller/user.controller.js', './controller/aws.controller.js'];

/* NOTE: if you use the express Router, you must pass in the
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(options)(outputFile, endpointsFiles, doc);