import React from 'react'
function Show({meat}){
    let {name, state, readyToEat} = meat
    return(
        <div>
            <h1>Show</h1>
            <p>Name: {name}</p>
            <p>State: {state}</p>
            <p>{readyToEat ? 'This meat is ready to eat' : 'This meat is not ready to eat.'}</p>
        </div>
    )
}
export default Show;