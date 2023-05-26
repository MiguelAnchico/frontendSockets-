import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import io from 'socket.io-client';
import { CardChats } from "./CardChats";

const socket = io("ws://localhost:4000");

export const Chats = ({name}) => {
    const [array, setArray] = useState([]);
    const { isLoading, isError, data, error } = useQuery(["repo"], () =>
    axios
      .get("http://localhost:4000/api/mensajes")
      .then((res) => setArray(res.data.mensajes))
  , {
    refetchOnWindowFocus: false,
  });

  

  useEffect(() => {
    socket.emit("welcome", {
      name: name,
    });

    socket.on("lista-usuarios", (list) => console.log(list));
}, []);
    
  return (
    <div>
        {
            array?.map(mensaje => (
                <CardChats mensaje={mensaje.contenido} nombre={mensaje.nombre} />
            ))
        }
        
    </div>
  )
}
