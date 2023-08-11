import React from 'react'
function Show({fruit}){
    let {name, color, readyToEat, _id} = fruit
    return(
        <div>
            <h1>Show</h1>
            <p>Name: {name}</p>
            <p>Color: {color}</p>
            <p>{readyToEat ? 'This fruit is ready to eat' : 'This fruit is not ready to eat.'}</p>
        
            <form action={`/fruits/${_id}?_method=DELETE`} method = 'POST'>
                <button>Remove</button>
            </form>
            <a href="/fruits"><button>Back</button></a>
            <a href={`/fruits/${_id}/edit`}><button>Edit</button></a>
        </div>
        
    )
}
export default Show;