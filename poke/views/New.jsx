import React from 'react'

function New() {
    return (
        <div style={{textAlign:"center"}}>
            <h1  style={{fontFamily:"monospace",fontSize:"4rem"}}>New</h1>
            <form action='/pokemon' method='POST'>

                <label style={{fontFamily:"monospace", fontSize:"2rem", margin:"1rem"} } htmlFor='name'>Name:</label><br />
                <input style = {{fontSize:"2rem",margin:"1rem"}} type='text' id='name' name='name'></input><br /><br /><br />
                
                <button style={{
                    width:"180px",
                backgroundColor:"red",
                padding:"2rem",
                fontFamily:"monospace",
                fontSize:"2rem",
                color:"white",
                margin:"1rem",
                border:"none",
                borderRadius:"2rem",
        }}>Submit</button>
        <a href="/pokemon"><button style={{
            width:"180px",
                backgroundColor:"red",
                padding:"2rem",
                fontFamily:"monospace",
                fontSize:"2rem",
                color:"white",
                margin:"2rem",
                border:"none",
                borderRadius:"2rem",

        }}>Back</button></a>
            </form>
            
        </div>
    )
}

export default New;