import React from 'react';
let airlines = ['American', 'Southwest', 'United']
let airports = ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
function New({departsDate}) {
    return (
        <div>
            <h1>New</h1>
           
            <form action='/flights' method='POST'>
                <label htmlFor='airport-select'>Airport:</label>
                <br />
                <select type='text' id='airport-select' name='departAirport'>
                    {airports.map((airport, i) => (<option key={i} value={airport} required>{airport}</option>))}
                </select>
                <br />
                <br />
                <label htmlFor='airline-select'>Airline:</label>
                <br />
                <select type='text' id='airline-select' name='airline'>
                    {airlines.map((airline, i) => (<option key={i} value={airline} required>{airline}</option>))}
                </select>
                <br />
                <br />
                <label htmlFor='flightNo'>Flight NO.:</label>
                <br />
                <input type='number' id='flightNo' name='flightNo'></input>
                <br />
                <br />
                <label htmlFor='depart'>Departure Date:</label>
                <br />
                <input type='datetime-local' id='depart' name='depart' defaultValue={departsDate}></input>
                <br />
                <br />
                <label htmlFor='airport'>Airport:</label><br />
                <select type='text' id='airport-select' name='arrivalAirport'>
                    {airports.map((airport, i) => (<option key={i} value={airport} required>{airport}</option>))}
                </select>
                <br />
                <br />
                <label htmlFor='arrival'>Arrival Date:</label>
                <br />
                <input type='datetime-local' id='arrival' name='arrival' defaultValue={departsDate}></input><br /><br /><br />
                <br />
                <br />
                <button>Submit</button>
            </form>

        </div>
    );
}

export default New;