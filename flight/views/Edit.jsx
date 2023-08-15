import React from 'react'

function Edit({ flight }) {
    let { airline, flightNo, depart, destinations, _id } = flight
    let airlines = ['American', 'Southwest', 'United']
    let airports = ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
    let dt = depart
    let at = destinations[0].arrival
    return (
        <div>
            <h1>Edit</h1>
            <form action={`/flights/${_id}?_method=PUT`} method='POST'>
            <label htmlFor='airport-select'>Airport:</label>
                <select type='text' id='airport-select' name='departAirport'>
                    {airports.map((airport, i) => (<option key={i} value={airport} defaultValue ={airport}required>{airport}</option>))}
                </select>
                <br />
                <br />
                <label htmlFor='airline-select'>Airline:</label><br />
                <select type='text' id='airline-select' name='airline' defaultValue={airline}>
                    {airlines.map((airline, i) => (<option key={i}  required>{airline}</option>))}
                </select><br /><br /><br />

                <label htmlFor='flightNo'>Flight NO.:</label><br />
                <input type='number' id='flightNo' name='flightNo' min="10" max="9999" defaultValue={flightNo}></input><br /><br />

                <label htmlFor='depart'>Departure Date:</label>
                <input type='datetime-local' id='depart' name='depart' defaultValue={dt.toISOString().slice(0,19)}></input><br /><br /><br />

                <label htmlFor='airport'>Airport:</label><br />
                <select type='text' id='airport-select' name='arrivalAirport'>
                    {airports.map((airport, i) => (<option key={i} value={airport} defaultValue={destinations[0].airport}required>{airport}</option>))}
                </select>
                <br />
                <br />

                <label htmlFor='arrival'>Departure Date:</label>
                <input type='datetime-local' id='arrival' name='arrival' defaultValue={at.toISOString().slice(0,19)}></input><br /><br /><br />

                <button>Submit</button>
            </form><br />
            <a href={`/flights/${_id}`}><button>Back</button></a>
        </div>
    )
}

export default Edit;