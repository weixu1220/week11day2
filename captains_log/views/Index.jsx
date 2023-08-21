import React from 'react'
function Index({logs}) {
    return (
        <div>
            <h1>Index</h1>
            <a href="/foodlogs"><h2>Food Logs</h2></a>
            {logs.map((log=>(
                <div>
                <p>{log.title}</p>
                <p>{log.createdAt.toString().slice(0,21)}</p>
                <a href={`/logs/${log._id}`}><button>Details</button></a>
                <a href={`/logs/${log._id}/edit`}><button>Edit</button></a>
                <form action={`/logs/${log._id}?_method=DELETE`} method='POST'>
                <button>Delete</button>
            </form><br />
                </div>
            )))}
            <a href="/logs/new"><button>Add a new log</button></a>
            <form action={`/logs/clear?_method=DELETE`} method='POST'>
                    <button>CLEAR ALL</button>
            </form>

        </div>

    );
}

export default Index;