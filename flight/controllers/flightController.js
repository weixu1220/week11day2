// Load the Fruit model so we can interact with the collection
const Flight = require('../models/Flight')
const Destination = require('../models/Flight')
// GET /flights
module.exports.index = async (req, res) => {
    let flights;

    try {
        flights = await Flight.find().sort({depart:1})
        console.log(flights)
    } catch(err) {
        console.log('Failed to create a Flight document: ', err)
    }
    
    console.log(flights)
    res.render('Index', { flights })
}

//  GET /flights/:id
module.exports.show = async (req, res) => {
    console.log('GET /flights/:id')
    let flight;

    try {
        flight = await Flight.findById(req.params.id)
        console.log(flight)
    } catch(err) {
        console.log('Failed to find Flight document with id ' + req.params.id, err)
    }
    

    if (flight) {
        res.render('Show', { flight })
    } else {
        res.redirect('/flights')
    }
}

//  GET /flights/new
//  GET /flights/new
module.exports.new = (req, res) => {
    const newFlight = new Flight();
    // Obtain the default date
    const dt = newFlight.depart;
    // Format the date for the value attribute of the input
    const departsDate = dt.toISOString().slice(0, 19);
    console.log(departsDate)
    res.render('New',{departsDate})
}

module.exports.edit = async (req, res) => {
    console.log('GET /flights/:id/edit')
    let flight;
    try {
        flight = await Flight.findById(req.params.id)
        console.log(flight)
        res.render('Edit', {flight})
    } catch(err) {
        console.log('Failed to find Flight document with id ' + req.params.id, err)
        res.redirect(`/flights/${req.params.id}`)
    }

    
}

// // POST /flights
module.exports.create = async (req, res) => {
    console.log('POST /flights')
    console.log(req.body, ) 
    console.log(req.body.arrivalAirport)
    console.log(req.body.arrival)

    let newFlight = {
        airport : req.body.departAirport,
        airline: req.body.airline,
        flightNo: req.body.flightNo,
        depart: req.body.depart,
        destinations:[{ airport: req.body.arrivalAirport, arrival: req.body.arrival}]
    }
    console.log(newFlight,'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~' )
    try {
        let flight = await Flight.create(newFlight)
        console.log(flight)
    } catch(err) {
        console.log('Failed to create a Flight document: ', err)
    }

    res.redirect('/flights')
}

// DELETE /flights/:id
module.exports.destroy = async (req, res) => {
    console.log('DELETE /flights/:id')

    try {
        await Flight.findByIdAndDelete(req.params.id)
    } catch(err) {
        console.log(err.message)
    }

    res.redirect('/flights')
}

module.exports.update = async (req, res) => {
    console.log('PUT /flights/:id')
    try { 
        await Flight.findByIdAndUpdate(req.params.id, req.body)
        res.redirect(`/flights/${req.params.id}`)
    } catch(err) {
        console.log(err.message)
        res.redirect(`/flights/${req.params.id}/edit`)
    }

}
module.exports.clear = async (req, res) => {
    console.log('DELETE /flights/clear')

    try {
        await Flight.deleteMany({})
    } catch(err) {
        console.log(err.message)
    }

    res.redirect('/flights')
}
module.exports.updateDestination = async(req,res) =>{
    console.log('/PUT ')
try{
    
    let newFlight = await Flight.findById(req.params.id)
    newFlight.destinations.push({ airport: req.body.arrivalAirport, arrival: req.body.arrival})
    await Flight.findByIdAndUpdate(req.params.id, newFlight)
    
    res.redirect(`/flights/${req.params.id}`) 
}catch(err){
    console.log(err.message)
}
}