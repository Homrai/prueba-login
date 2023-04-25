import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react"

const Chat = () => {
    const [mensajes,setMensajes]=useState([])
    const traerChat=async ()=>{
        const datos = await fetch("https://pbakxq15qi.execute-api.us-west-2.amazonaws.com/testing?user=admin&password=admin", {
            method: 'GET',
        });
        const res = await datos.json();
        setMensajes(res);
    }
    useEffect(()=>{
        traerChat();
    },[]);
  return (
    <div className="chat">
        {mensajes.map(({sender,message}, index)=>(
                <Box
                    key={"mensajes"+index}
                    sx={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        marginBottom:'10px',
                        width: {xs:300, sm:500, md:700, lg:1000},
                        fontSize:'25px',
                        color: `${sender==="agent"?'blue':'green'}`,
                        textDecoration: 'underline',
                    }}
                    >
                    <h5 className="mar">{sender}</h5>
                    <h6 className="black">{message}</h6>
                </Box>
        ))}
    </div>
  )
}

export default Chat
