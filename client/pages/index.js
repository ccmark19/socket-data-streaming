import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { io } from "socket.io-client";
import { useEffect,useState } from 'react';

export default function Home() {

  const socket = io("http://localhost:5000/",{
    withCredentials: true,
    extraHeaders: {
      "my-custom-header": "abcd"
    }
  });  
  

// useEffect(()=>{
//   let socket = io.connect("http://localhost:5000/");
//   socket.on('userCount', function(data){
//       console.log(data);
//       document.getElementById("getcount").innerHTML = "currenty " + data.userCount + " user connected";
//   })
// })
// const [socket, setSocket] = useState(null);
// useEffect(() => {
//   const newSocket = io(`http://localhost:5000/`);
//   setSocket(newSocket);
//   return () => newSocket.close();
// }, [setSocket]);



// client-side
socket.on("connect", () => {
  console.log("ssssuccesssed!!!"); // x8WIv7-mJelg7on_ALbx
});

  return (
      <div style={{height: "100vh", display: "flex", justifyContent:"center", alignItems: "center"}}>
        <div>client content</div>
          <div id="getcount">
            <script src="/socket.io/socket.io.js"></script>
            <div>{socket ? (
                     <div className="chat-container">
                     <div socket={socket} />
                     <div socket={socket} />
                   </div>
                 ) : (
                   <div>Not Connected</div>
                 )}
            </div>
          </div>
        </div>
  )
}
