const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);
const db = require('./db');

// app.get('/', (req, res) => {      
//     res.sendFile(__dirname + '/index.html');
// });

const io = require("socket.io")(server, {
    cors: {
        origin: '*',



    }
  });


io.on('connection', function (socket){        
    // start
    console.log('connected start');
    
    let sql = "SELECT * FROM login_metrics lm WHERE lm.date IN (SELECT max(date) FROM login_metrics)";
    let result = db(sql).then((res)=>{     
        socket.emit('geoData',{
            // geoData: 'Hello there'
            data: res
        });
    });
    // end    
    // if user disconnect, count minus 1
    socket.on('disconnect', function () {
        // userCount--;
        // io.emit('userCount', {userCount: userCount});
        console.log('disconnect');      
    })
})




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