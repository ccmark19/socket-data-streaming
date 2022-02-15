import React, { useEffect,useState } from 'react'
import io from 'Socket.IO-client'
let socket

export default function Home() {
    
    const [input, setInput] = useState([0])
    useEffect(() => socketInitializer(), [])

    const socketInitializer = async () => {
        await fetch('/api/socket')        
        socket = io()

        socket.on('update-input', msg => {            
              setInput((prevState)=>
                [...prevState,msg[0]]
              )                      
          })
      }

      console.log('the state',input );
      
    
  return (
      <div style={{height: "100vh", display: "flex", justifyContent:"center", alignItems: "center"}}>
        <div>client content</div>
        {
          console.log('input->',input)
        }
        </div>
  )
}
