
import React, {useState } from 'react';
import { io } from "socket.io-client";

const App = () =>{
  const [socketState, setSocketState] = useState(null);
  const socket = io("http://localhost:5000/", {
    withCredentials: true,
    extraHeaders: {
      "my-custom-header": "abcd"
    }
  });

  socket.on('geoData', (data) => { 
    console.log('data->',data);
    
    setSocketState(data.data);    
  });

  console.log('socketState1->', socketState);

  return (
      <div style={{height: "100vh", display: "flex", justifyContent:"center", alignItems: "center"}}>
        <div>client : </div>
          <div id="getcount">
            <script src="/socket.io/socket.io.js"></script>
            <div>
              {console.log('socketState2->',socketState)}
              {socketState ? socketState : " nothing found"}  
            </div>         
          </div>
        </div>
  )
}

export default App;
