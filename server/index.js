const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);
const db = require('./db');
const post
// app.get('/', (req, res) => {      
//     res.sendFile(__dirname + '/index.html');
// });
app.get('/post',);







server.listen(5000, () => {
  console.log('listening on *:5000');
});























    // let userCount = 0;

    // if a new window open, count as a new user
    // console.log('connecting');  
    // userCount++;
    // io.emit('userCount', {userCount: userCount});



    // socket.emit('geoData',{
    //     // geoData: 'Hello there'
    //     geoData: result
    // });

    // if user disconnect, count minus 1
    // socket.on('disconnect', function () {
    //     userCount--;
    //     io.emit('userCount', {userCount: userCount});
    //     console.log('disconnect');      
    // })