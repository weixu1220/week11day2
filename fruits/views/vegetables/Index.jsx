import React from 'react';
function Index(props){
    return(
        <div>
            <h1>Index</h1>
            {props.vegetables.map((vegetable,i)=>
            <div key={i}>
            <a href={`/vegetables/${i}`}>{vegetable.name}</a>
            </div>
            )}
        </div>
    )
}
export default Index;