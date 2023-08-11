import React from 'react'
function Show({vegetable,index}){
    return(
        <div>
            <h1>Show</h1>
            <p>Name: {vegetable.name}</p>
            <p>Color: {vegetable.color}</p>
            <p>{vegetable.readyToEat ? 'This vegetable is ready to eat' : 'This vegetable is not ready to eat.'}</p>
        
            <form action={`/vegetables/${index}?_method=DELETE`} method = 'POST'>
                <button>Remove</button>
            </form>
            <a href="/vegetables"><button>Back</button></a>
            <a href={`/vegetables/${index}/edit`}><button>Edit</button></a>
        </div>
        
    )
}
export default Show;