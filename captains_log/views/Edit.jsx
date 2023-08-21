import React from 'react'

function Edit({log}) {
    let { title, entry, shipIsBroken, _id } = log
    return (
        <div>
            <h1>Edit</h1>
            <form action={`/logs/${_id}?_method=PUT`} method='POST'>
                <label htmlFor="title">Title:</label>
                <input type="text" name='title' defaultValue={title} />
                <br />
                <label htmlFor="entry">Entry:</label>
                <input type="textarea" name='entry' defaultValue={entry}/>
                <br />
                <label htmlFor="shipIsBroken">Ship condition:</label>
                <input type="checkbox" name='shipIsBroken' defaultChecked={shipIsBroken} />
                <br />
                <button>Submit</button>
            </form>
            
            <a href={`/logs/${_id}`}><button>back</button></a>
        </div>
    )
}

export default Edit;