import React from 'react'
function Show({meat,index}){
    return(
        <div>
            <h1>Show</h1>
            <p>Name: {meat.name}</p>
            <p>State: {meat.state}</p>
            <p>{meat.readyToEat ? 'This meat is ready to eat' : 'This meat is not ready to eat.'}</p>
        
            <form action={`/meats/${index}?_method=DELETE`} method = 'POST'>
                <button>Remove</button>
            </form>
            <a href="/meats"><button>Back</button></a>
            <a href={`/meats/${index}/edit`}><button>Edit</button></a>
        </div>
        
    )
}
export default Show;