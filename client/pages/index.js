import React, { useEffect,useState } from 'react'
import io from 'Socket.IO-client'
let socket

export default function Home() {
    
    const [input, setInput] = useState([])

    useEffect(() => socketInitializer(), [])

    const socketInitializer = async () => {
        await fetch('/api/socket')
        socket = io()

        socket.on('update-input', (msg) => {
          const temp = input;
          temp[msg[0].session] = msg[0];
          setInput(temp);
          })
      }
  return (
      <div style={{height: "100vh", display: "flex", justifyContent:"center", alignItems: "center"}}>
        <div>client content</div>
        {
          console.log('input->',input)
        }
        </div>
  )
}
