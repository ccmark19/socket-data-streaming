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
          
          const temp = msg;
          // const temp = input;
          console.log('front console ->',temp);
          // temp[msg[0].session] = msg[0];
          setInput(temp);
          })
      }
  return (
      <div style={{height: "100vh", display: "flex", justifyContent:"center", alignItems: "center", flexDirection: "column"}}>
        <div>client content</div>
        <div>
          {
            input ? Object.keys(input).map((key,index)=>{
              return <p key={key}>
                      <span>{key}:</span>
                      <span>{input[key]}</span>
                    </p>
            }) : "no record yet, please send one"
          }
        </div>
        </div>
  )
}
