import React from 'react';
function Index(props){
    return(
        <div>
            <h1>Index</h1>
            {props.meats.map((meat,i)=>
            <div key={i}>
            <a href={`/meats/${i}`}>{meat.name}</a>
            </div>
            )}
        </div>
    )
}
export default Index;