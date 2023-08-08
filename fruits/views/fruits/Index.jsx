import React from 'react';
function Index(props){
    return(
        <div>
            <h1>Index</h1>
            {props.fruits.map((fruit,i)=>
            <div key={i}>
            <p>{fruit.name}</p>
            </div>
            )}
        </div>
    )
}
export default Index;