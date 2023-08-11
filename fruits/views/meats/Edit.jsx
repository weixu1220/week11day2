import React from 'react'
function Edit({meat, index}) {
    let {name, state, readyToEat} = meat
    return (
        <div>
            <h1>Edit</h1>
            <form action={`/meats/${index}?_method=PUT`} method = 'POST'>

                <label htmlFor="name">Name:</label>
                <input id='name' name='name' type="text" value={name}/>
                <br/>
                <br/>
                <label htmlFor="color">State:</label>
                <input id='state' name='state' type="text" value={state}/>
                <br/>
                <br/>
                <label htmlFor="ready">Ready to eat:</label>
                <input id='ready' name='readyToEat' type="checkbox" checked={readyToEat}/>
                <br/>
                <br/>
                <button>Update</button>
            </form>
            <a href="/meats"><button>Back to index</button></a>
            <a href={`/meats/${index}`}><button>Back to show</button></a>
        </div>
    );
}

export default Edit;