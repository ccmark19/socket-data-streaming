import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { io } from "socket.io-client";
import React, { useEffect,useState } from 'react';
import { stringifyQuery } from 'next/dist/server/server-route-utils';

export default function Home() {

  // const [socketState, setSocketState] = useState(null);
  const socket = io("http://localhost:5000/");

  // useEffect(()=>{
    socket.on('geoData', (data) => {console.log('socketState->',JSON.stringify(data))});
    // socket.on('geoData', (data) => {setSocketState(data)});
    // if(socketState != null){console.log('socketState->',socketState)}
  // })
  
  return (
      <div style={{height: "100vh", display: "flex", justifyContent:"center", alignItems: "center"}}>
        <div>client content=</div>
          <div id="getcount">
            <script src="/socket.io/socket.io.js"></script>
            <div>
              {/* {socketState ? socketState : "nothing found"}   */}
            </div>         
          </div>
        </div>
  )
}
