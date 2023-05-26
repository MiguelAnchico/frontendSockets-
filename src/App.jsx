import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { AgregarNombre } from './AgregarNombre';
import { Chats } from './Chats';



function App() {
  const [nombre, setNombre] = useState()

  if(!nombre) {
    return (
      <>
        <AgregarNombre nombre={setNombre} />
      </>
    )
  }
  
  return(
    <>
      <Chats name={nombre} />
    </>
  )
}

export default App
