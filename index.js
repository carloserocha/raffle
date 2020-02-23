import express from 'express';

const server = express();
const Customer = require('./Routes/customer');

const run = async () => {
    await Customer.run()
    server.post('/api/customer', await Customer.send(req, res));

    server.listen(8080);
}

run().catch(e => console.error(e))