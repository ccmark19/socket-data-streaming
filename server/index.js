const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
app.get('/', (req, res) => {      
    res.sendFile(__dirname + '/index.html');
});

let userCount = 0;
io.on('connection', function (socket){

    userCount++;
    io.emit('userCount', {userCount: userCount});
    
    socket.on('disconnect', function () {
        userCount--;
        io.emit('userCount', {userCount: userCount});
        console.log('disconnect');      
    })
})


server.listen(5000, () => {
  console.log('listening on *:5000');
});