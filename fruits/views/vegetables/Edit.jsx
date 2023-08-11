import React from 'react'
function Edit({vegetable, index}) {
    let {name, color, readyToEat} = vegetable
    return (
        <div>
            <h1>Edit</h1>
            <form action={`/vegetables/${index}?_method=PUT`} method = 'POST'>

                <label htmlFor="name">Name:</label>
                <input id='name' name='name' type="text" value={name}/>
                <br/>
                <br/>
                <label htmlFor="color">Color:</label>
                <input id='color' name='color' type="text" value={color}/>
                <br/>
                <br/>
                <label htmlFor="ready">Ready to eat:</label>
                <input id='ready' name='readyToEat' type="checkbox" checked={readyToEat}/>
                <br/>
                <br/>
                <button>Update</button>
            </form>
            <a href="/vegetables"><button>Back to index</button></a>
            <a href={`/vegetables/${index}`}><button>Back to show</button></a>
        </div>
    );
}

export default Edit;