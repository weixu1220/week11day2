import React from 'react'

export default function New(){
    return (
        <div>
            <form action="/logs" method='POST'>
                <label htmlFor="title">Title:</label>
                <input type="text" name='title' />
                <br />
                <label htmlFor="entry">Entry:</label>
                <input type="textarea" name='entry' />
                <br />
                <label htmlFor="shipIsBroken">Ship condition:</label>
                <input type="checkbox" name='shipIsBroken' checked/>
                <br />
                <button>Submit</button>
            </form>
            <a href="/logs"><button>Back</button></a>
        </div>
    )
}