import React from 'react';

function Index({ flights }) {
    return (
        <div>
            <h1>Index</h1>
            {flights.map((flight, i) =>
                <div>
                    <p key={i}>{`${flight.airline} ${flight.flightNo}`}</p>
                    <a href={`/flights/${flight._id}`}>Detail</a>
                </div> 
                
            )}
            <br />
            <form action={`/flights/new`}>
                <button>Add Flight</button>
            </form><br />
            <form action={`/flights/clear?_method=DELETE`} method='POST'>
                <button>CLEAR</button>
            </form>
        </div>
    );
}

export default Index;