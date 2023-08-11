import React from 'react'
function Show({poke}){
    let {name, img, _id}= poke
    return(
        <div style={{textAlign:"center"}}>
            <h1 style={{fontFamily:"monospace",fontSize:"4rem"}}>Gotta Catch 'Em All</h1>
        <div style={{
            textAlign:"center",
            width:"500px",
            height:"600px",
            border:"2px solid black",
            borderRadius:"2rem",
            padding:"2rem",
            margin:"auto auto",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <h2 style={{fontFamily:"monospace",fontSize:"2rem",padding:"1rem"}}>{name[0].toUpperCase()+name.slice(1)}</h2>
        <img src={img} alt={`Image of ${name}`} />
            
        </div>
            <a href="/pokemon"><button style={{
                backgroundColor:"red",
                padding:"2rem",
                fontFamily:"monospace",
                fontSize:"2rem",
                color:"white",
                margin:"2rem",
                border:"none",
                borderRadius:"2rem",

        }}>Back</button></a>
        </div>
    )
}
export default Show;