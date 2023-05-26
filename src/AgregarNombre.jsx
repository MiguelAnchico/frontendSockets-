import { useState } from "react"

export const AgregarNombre = ({nombre}) => {
    const [user, setUser] = useState('');

    const handleUser = () => {
        if(user.length == 0) return;
        nombre(user)
    }

  return (
    <>
        <h1>Escribe tu nombre</h1>
        <input type="text" onChange={e => setUser(e.target.value)} />
        <br />
        <button onClick={handleUser}>Comenzar</button>
    </>
  )
}
