import * as config from 'config';
import { app, init } from './api/app';

var port = process.env.PORT || config.get<string>('node.port');

init().then(() => {
    app.listen(port, () => {
        console.log(`Service is up and running on port: ${port}`);
    });
})