import { Server } from 'Socket.IO'
const db = require('./db');

const SocketHandler = (req, res) => {

  const getSQLResult = (io) =>{
    io.on('connection', function (socket){        
      let sql = "SELECT * FROM login_metrics lm WHERE lm.date IN (SELECT max(date) FROM login_metrics)";
      setInterval(function () {            
          db(sql).then((msg)=>{
              socket.emit('update-input', msg)
          });
      }, 2000);
    })
  }

  if (res.socket.server.io) {
    console.log('Socket is already running');    
    getSQLResult(res.socket.server.io);
  } else {
    console.log('Socket is initializing')
    const io = new Server(res.socket.server)
    res.socket.server.io = io        
    getSQLResult(io);
  }
  res.end()
}

export default SocketHandler