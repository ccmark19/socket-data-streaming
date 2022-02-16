// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Server } from 'Socket.IO'
export default function handler(req, res) {
  // socket.emit('update-input', msg)
  const req_body = req.body;
  const io = new Server(res.socket.server);
  res.socket.server.io = io;
  console.log('req_body1->',req_body);
  io.on('connection', function (socket){    
      console.log('req_body->',req_body);
        
      socket.emit('update-input',req_body)

  })
  res.status(200).json({"message": "succeed"})
}