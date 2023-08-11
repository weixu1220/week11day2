import React from 'react'
function New() {
    return (
        <div>
            <h1>New</h1>
            <form action="/fruits" method='POST'>

                <label htmlFor="name">Name:</label>
                <input id='name' name='name' type="text" />
                <br/>
                <br/>
                <label htmlFor="color">Color:</label>
                <input id='color' name='color' type="text" />
                <br/>
                <br/>
                <label htmlFor="ready">Ready to eat:</label>
                <input id='ready' name='readyToEat' type="checkbox" />
                <br/>
                <br/>
                <button>Submit</button>
            </form>
            <a href="/fruits"><button>Back to index</button></a>
        </div>
    );
}

export default New;