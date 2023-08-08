import React from 'react'
function Show({vegetable}){
    let {name, color, readyToEat} = vegetable
    return(
        <div>
            <h1>Show</h1>
            <p>Name: {name}</p>
            <p>Color: {color}</p>
            <p>{readyToEat ? 'This vegetable is ready to eat' : 'This vegetable is not ready to eat.'}</p>
        </div>
    )
}
export default Show;