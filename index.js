const express = require('express');
const app = express();
const port = 3000;
const airlinedata = require('./airlinedata.json');
const airportdata = require('./airportdata.json');
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Documentation Incoming for Aerokey');
});

app.get('/v1/airports', (req, res) => {
  res.json({
    total: airportdata.length,
    airports: airportdata,
    message: 'Success',
    status: 200,
  });
});

app.get('/v1/airports/code/:code', (req, res) => {
  const airport = airportdata.find(
    (airport) =>
      airport.airport_code.toLowerCase() === req.params.code.toLowerCase()
  );

  if (!airport) {
    return res.status(404).json({ message: 'Airport not found', status: 404 });
  }

  res.json(airport);
});

app.get('/v1/airports/name/:name', (req, res) => {
  const airport = airportdata.find(
    (airport) =>
      airport.airport_name.toLowerCase() === req.params.name.toLowerCase()
  );

  if (!airport) {
    return res.status(404).json({ message: 'Airport not found' });
  }
  res.json(airport);
});

app.get('/v1/airports/city/:city', (req, res) => {
  const airport = airportdata.find(
    (airport) =>
      airport.city_name.toLowerCase() === req.params.city.toLowerCase()
  );

  if (!airport) {
    return res.status(404).json({ message: 'Airport not found' });
  }

  res.json(airport);
});

app.get('/v1/airports/state/:state', (req, res) => {
  // Filter all airports in the specified state
  const airports = airportdata.filter(
    (airport) =>
      airport.state_name.toLowerCase() === req.params.state.toLowerCase()
  );

  // If no airports are found, return a 404 error
  if (airports.length === 0) {
    return res.status(404).json({ message: 'No airports found in this state' });
  }

  // Return the list of airports
  res.json(airports);
});

app.get('/v1/airports/pincode/:pincode', (req, res) => {
  const airport = airportdata.find(
    (airport) => airport.pincode === req.params.pincode
  );

  if (!airport) {
    return res.status(404).json({ message: 'Airport not found' });
  }

  res.json(airport);
});

app.get('/v1/airports/statecode/:statecode', (req, res) => {
  // Filter all airports with the specified state code
  const airports = airportdata.filter(
    (airport) =>
      airport.state_code.toLowerCase() === req.params.statecode.toLowerCase()
  );

  // If no airports are found, return a 404 error
  if (airports.length === 0) {
    return res
      .status(404)
      .json({ message: 'No airports found for this state code' });
  }

  // Return the list of airports
  res.json(airports);
});

app.get('/v1/airports/airporttype/:airporttype', (req, res) => {
  const airports = airportdata.filter(
    (airport) =>
      airport.airport_type.toLowerCase() ===
      req.params.airporttype.toLowerCase()
  );

  if (!airports.length) {
    return res.status(404).json({ message: 'No airports found' });
  }

  res.json(airports);
});

//airline Routes

app.get('/v1/airlines', (req, res) => {
  res.json({
    airlines: airlinedata,
  });
});

app.get('/v1/airlines/code/:iata', (req, res) => {
  const airline = airlinedata.find(
    (airline) =>
      airline.iata_code.toLowerCase() === req.params.iata.toLowerCase()
  );

  if (!airline) {
    return res.status(404).json({ message: 'Airline not found' });
  }

  res.json(airline);
});

app.get('/v1/airlines/name/:name', (req, res) => {
  const airline = airlinedata.find(
    (airline) =>
      airline.airline_name.toLowerCase() === req.params.name.toLowerCase()
  );

  if (!airline) {
    return res.status(404).json({ message: 'Airline not found' });
  }

  res.json(airline);
});

app.get('/v1/airlines/name/:name', (req, res) => {
  const airline = airlinedata.find(
    (airline) =>
      airline.airline_name.toLowerCase() === req.params.name.toLowerCase()
  );

  if (!airline) {
    return res.status(404).json({ message: 'Airline not found' });
  }

  res.json(airline);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
