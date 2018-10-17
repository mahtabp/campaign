import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as swaggerUi from 'swagger-ui-express';
import * as controller from './controllers/functions-controller';

export const app = express();

var swaggerDoc = require('./docs/swagger.json');

export async function init() {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
    app.get('/', controller.getStatus);
    app.post('/isNullOrEmpty', controller.getIsNullOrEmpty);
    app.post('/positive-divisors', controller.getpositiveDivisors);
    app.post('/triangle-area', controller.getTriangleArea);
    app.post('/most-common', controller.getMostCommon);
    
    app.use(function (err, req, res, next) {
        if (err instanceof Error) {
            res.status(400).send(err);
        }
        else {
            next(err);
        }
    });
}