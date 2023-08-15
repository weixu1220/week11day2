import React from 'react'

export default function Show({ flight }) {
    let { airport, airline, flightNo, depart, destinations, _id } = flight
    let airports = ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
    return (
        <div>
            <h1>Show</h1>
            <p>Airport:{airport}</p>
            <p>Airline: {airline}</p>
            <p>Flight NO: {flightNo}</p>
            <p>Departure Time:{depart.toString()}</p>
            <h1>Destinations</h1>
            {destinations !=[] && destinations.map((destination, i )=> <p>Airport: {destination.airport}</p>)}
            {destinations !=[] && destinations.map((destination, i )=><p>Arrival Time: {destination.arrival.toString()}</p>)}
            
            <br />
            <form action={`/flights/update/${flight._id}?_method=PUT`} method='POST'>
            <label htmlFor='airport'>Airport:</label><br />
                <select type='text' id='airport-select' name='arrivalAirport'>
                    {airports.map((airport, i) => (<option key={i} value={airport} required>{airport}</option>))}
                </select>
                <br />
                <br />
                <label htmlFor='arrival'>Arrival Date:</label>
                <br />
                <input type='datetime-local' id='arrival' name='arrival' ></input><br /><br /><br />
                <br />
                <br />
                <button>Submit</button>
            </form>
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