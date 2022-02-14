const { createServer } = require("http");
const { Server } = require("socket.io");
const port = 8000;
const httpServer = createServer();
const io = new Server(httpServer, { /* options */ });


io.on("connection", (socket) => {
    console.log('connection return successed!')
});

httpServer.listen(port);