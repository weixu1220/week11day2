import React from 'react';

function Index({pokemon}){
    return(
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h1 style = {{
                fontFamily:"monospace",
                backgroundColor:"darkblue", 
                textAlign:"center", 
                color:"white",
                fontSize:"3rem",
                padding:"1rem",
                }}>See All The Pokemon!</h1>
            {pokemon.map((poke,i)=>
            <div key={i} style={{
                width:"200px",
                textAlign:"center",
                fontSize:"2rem",
                margin:"1rem",
                padding:"1rem",
                }}>
            <a href={`/${poke.name}`} style={{
                color:"darkblue", 
                fontFamily:"monospace",
                textDecoration:"none",
                
                }}>{poke.name[0].toUpperCase()+poke.name.slice(1)}</a>
            </div>
            )}
        </div>
    )
}
export default Index;