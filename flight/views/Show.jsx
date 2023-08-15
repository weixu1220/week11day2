import React from 'react'

export default function Show({ flight }) {
    let { airport, airline, flightNo, depart, destinations, _id } = flight
    return (
        <div>
            <h1>Show</h1>
            <p>Airport:{airport}</p>
            <p>Airline: {airline}</p>
            <p>Flight NO: {flightNo}</p>
            <p>Departure Time:{depart.toString()}</p>
            {destinations !=[] && <p>Airport: {destinations[0].airport}</p>}
            {destinations !=[] && <p>Arrival Time: {destinations[0].arrival.toString()}</p>}
            
            <br />
            <form action={`/flights/${_id}/edit`}>
                <button>Edit</button>
            </form><br />
            <form action={`/flights/${_id}?_method=DELETE`} method='POST'>
                <button>Remove</button>
            </form>
            <br />
            <a href='/flights'><button>Back</button></a>
            
        </div>
    )
}