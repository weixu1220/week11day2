import React from "react";

function New() {
    return (
        <div>
            <h1>New</h1>
            <form action="/foodlogs" method='POST'>
                <label htmlFor="name">Food:</label>
                <input type="text" name='name' />
                <br />
                <label htmlFor="quantity">Quantity:</label>
                <input type="text" name='quantity' />
                <br />
                <button>Submit</button>
            </form>
            <a href="/foodlogs"><button>Back to Food Log</button></a>
            <a href="/logs"><button>Back to Captain's Log</button></a>
        </div>
    );
}

export default New;