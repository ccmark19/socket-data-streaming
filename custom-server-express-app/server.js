const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const db = require('./db');

app.prepare().then(() => {
  const server = express()

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })


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
    socket.on('disconnect', function () {
        console.log('disconnect');      
    })
  })
})
