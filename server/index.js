const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const axios = require('axios');
const querystring = require('querystring');


app.get('/', (req, res) => {      
    res.sendFile(__dirname + '/index.html');
});








let userCount = 0;
io.on('connection', function (socket){
    // if a new window open, count as a new user
    console.log('connecting');  
    userCount++;
    io.emit('userCount', {userCount: userCount});
    
    
    // start        
        let res = axios.post(url).then((res)=>{console.log('res->',res);
        });
    // end


    socket.emit('geoData',{
        // geoData: 'Hello there'
        geoData: res
    });

    // if user disconnect, count minus 1
    socket.on('disconnect', function () {
        userCount--;
        io.emit('userCount', {userCount: userCount});
        console.log('disconnect');      
    })
})

server.listen(5000, () => {
  console.log('listening on *:5000');
});