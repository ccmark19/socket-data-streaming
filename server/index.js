const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const axios = require('axios');
const querystring = require('querystring');
const db = require('./db');

app.get('/', (req, res) => {      
    res.sendFile(__dirname + '/index.html');
});

// let userCount = 0;
io.on('connection', function (socket){
    // if a new window open, count as a new user
    // console.log('connecting');  
    // userCount++;
    // io.emit('userCount', {userCount: userCount});
        
    // // start
    let sql = "SELECT * FROM login_metrics lm WHERE lm.date IN (SELECT max(date) FROM login_metrics)";
    let result = db(sql).then((res)=>{
        console.log('res->',res);        
        socket.emit('geoData',{
            // geoData: 'Hello there'
            geoData: res
        });
    });
    // // end
    
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
})

server.listen(5000, () => {
  console.log('listening on *:5000');
});