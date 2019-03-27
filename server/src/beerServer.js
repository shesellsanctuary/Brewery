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

io.on('connection', (socket) => {
    console.info(`Server: Connected client on port ${port}`);

    let beers = require('../beers.json');
    startDelivery(socket, beers.beers);

});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function startDelivery(socket, beers) {
    console.info('Server: Started delivery of beers: ');
    // Change temperature randomly
    let type = getRandomInt(5);
    beers[type].temperature = getRandomInt(10);
    console.debug('Server: changed beer -> ', beers[type]);
    
    // Send new data
    socket.emit('beers', beers);
    
    socket.on('disconnect', () => {
        console.info('Server: Client disconnected');
        clearTimeout(loop);
    });
    
    let loop = setTimeout(() => {
        startDelivery(socket, beers);
    }, 10000);
    
}
