import React from 'react'
function Show({ log }) {
    console.log(log)
    const { title, entry, shipIsBroken, _id } = log
    return (
        <div>
            <div>
                <h1>Show</h1>
                <p>{title}</p>
                <p>{entry}</p>
                {shipIsBroken ? <p>This ship is broken!</p> : <p>This ship is in good shape.</p>}
            </div>

            <form action={`/logs/${_id}?_method=DELETE`} method='POST'>
                <button>Remove</button>
            </form>
            <form action={`/logs/${_id}/edit`}>
                <button>Edit</button>
            </form><br />
            <a href="/logs"><button>Back</button></a>
        </div>

    );
}

export default Show;