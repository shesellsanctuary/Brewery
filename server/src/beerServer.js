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
    console.log(`Server: Connected client on port ${port}`);

    startDelivery(socket);

    io.on('disconnect', () => {
        console.log('Server: Client disconnected');
    });
});


function startDelivery(socket) {
    // Get Json 
    let beers = require('../beers.json');
    // Change temperature randomly
    console.debug('beers: ', beers);
    let type = Math.floor(Math.random() * 5);
    let newBeers = beers.beers;
    console.debug('type: ', type);
    console.debug('newbeers: ', newBeers);
    newBeers[type].temperature = Math.floor(Math.random() * 9);
    console.debug('beers: ', newBeers);
    console.debug('Server: Started delivery of beers: ');
    socket.emit('beers', newBeers);

    // setTimeout(() => {
    //     startDelivery(socket);
    // }, 5000);
}