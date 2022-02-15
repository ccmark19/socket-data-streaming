import React, { useEffect,useState } from 'react'
import io from 'Socket.IO-client'
let socket

export default function Home() {
    
    const [input, setInput] = useState([0])
    const [inputPointer, setInputPointer] = useState([0])
    useEffect(() => socketInitializer(), [])

    const socketInitializer = async () => {
        await fetch('/api/socket')
        socket = io()

        socket.on('update-input', (msg) => {
          console.log(inputPointer,msg[0]);
                  
              if (inputPointer != msg[0]){
                setInputPointer(inputPointer=>msg[0]);
                setInput((prevState)=>
                  [...prevState,msg[0]]
              )}
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
