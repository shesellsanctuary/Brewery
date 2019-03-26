const express = require('express');
const socket = require('socket.io');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors({origin: '*'}));
app.use(bodyParser);

const port = 3000;

const server = app.listen(port, () => {
    console.log(`Server: Started server on ${port}`);
});

const io = socket(server);

io.sockets.on('connection', (socket) => {
    console.log(`Server: Connected client on port ${port}`);

    startDelivery(socket);

    io.sockets.on('disconnect', () => {
        console.log('Server: Client disconnected');
    });
});


function startDelivery(socket) {
    // Get Json 
    let beers = require('../beers.json');
    // Change temperature randomly
    console.debug('Server: Started delivery of beers: ', beers.beers);
    socket.emit('beers', beers.beers);

    setTimeout(() => {
        startDelivery(socket);
    }, 5000);
}