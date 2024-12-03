const express = require('express');
const app = express();
const port = 3000;
const airlinedata = require('./airlinedata.json');
const airportdata = require('./airportdata.json');
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Airport API Documentation</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
      background-color: #f4f4f9;
      color: #333;
    }
    h1, h2 {
      color: #005b96;
    }
    pre {
      background-color: #e1e1e1;
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
    }
    .endpoint {
      background-color: #f9f9f9;
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 5px;
      margin-bottom: 20px;
    }
    .title {
      font-size: 1.2em;
      font-weight: bold;
    }
    .error {
      color: #d9534f;
    }
    .success {
      color: #5bc0de;
    }
    footer {
      margin-top: 40px;
      text-align: center;
      font-size: 0.9em;
    }
  </style>
</head>
<body>
  <h1>Airport API Documentation</h1>
  <p>Welcome to the official documentation for the Airport API! This API provides detailed information on airports and airlines in India, such as airport codes, locations, types, and airlines operating in India.</p>
  <p>Base URL: <a href="https://aerokey.vercel.app" target="_blank">https://aerokey.vercel.app</a></p>
  <p>Author: <a href="https://abhishekjainn.vercel.app" target="_blank">Abhishek Jain</a></p>

  <h2>API Endpoints</h2>

  <div class="endpoint">
    <div class="title">1. Get all Airports</div>
    <p>Request:</p>
    <pre>GET /v1/airports</pre>
    <p>Response:</p>
    <pre>
{
  "total": 1000,
  "airports": [...],
  "message": "Success",
  "status": 200
}
    </pre>
    <p>This endpoint retrieves a list of all airports.</p>
  </div>

  <div class="endpoint">
    <div class="title">2. Get Airport by Code</div>
    <p>Request:</p>
    <pre>GET /v1/airports/code/:code</pre>
    <p>Response:</p>
    <pre>
{
  "airport_code": "DEL",
  "airport_name": "Indira Gandhi International Airport",
  "city_name": "New Delhi",
  "state_name": "Delhi",
  "airport_type": "International",
  "pincode": "110037",
  "state_code": "DL",
  "message": "Success",
  "status": 200
}
    </pre>
    <p>Error Message (if not found):</p>
    <pre>
{
  "message": "Airport not found",
  "status": 404
}
    </pre>
    <p>This endpoint allows you to retrieve information for a specific airport by its airport code.</p>
  </div>

  <div class="endpoint">
    <div class="title">3. Get Airport by Name</div>
    <p>Request:</p>
    <pre>GET /v1/airports/name/:name</pre>
    <p>Response:</p>
    <pre>
{
  "airport_code": "DEL",
  "airport_name": "Indira Gandhi International Airport",
  "city_name": "New Delhi",
  "state_name": "Delhi",
  "airport_type": "International",
  "pincode": "110037",
  "state_code": "DL",
  "message": "Success",
  "status": 200
}
    </pre>
    <p>Error Message (if not found):</p>
    <pre>
{
  "message": "Airport not found",
  "status": 404
}
    </pre>
    <p>This endpoint allows you to retrieve information for a specific airport by its name.</p>
  </div>

  <div class="endpoint">
    <div class="title">4. Get Airport by City</div>
    <p>Request:</p>
    <pre>GET /v1/airports/city/:city</pre>
    <p>Response:</p>
    <pre>
{
  "airport_code": "DEL",
  "airport_name": "Indira Gandhi International Airport",
  "city_name": "New Delhi",
  "state_name": "Delhi",
  "airport_type": "International",
  "pincode": "110037",
  "state_code": "DL",
  "message": "Success",
  "status": 200
}
    </pre>
    <p>Error Message (if not found):</p>
    <pre>
{
  "message": "Airport not found",
  "status": 404
}
    </pre>
    <p>This endpoint allows you to retrieve information for a specific airport by its city.</p>
  </div>

  <div class="endpoint">
    <div class="title">5. Get Airports by State</div>
    <p>Request:</p>
    <pre>GET /v1/airports/state/:state</pre>
    <p>Response:</p>
    <pre>
[
  {
    "airport_code": "BOM",
    "airport_name": "Chhatrapati Shivaji Maharaj International Airport",
    "city_name": "Mumbai",
    "state_name": "Maharashtra",
    "airport_type": "International",
    "pincode": "400099",
    "state_code": "MH",
    "message": "Success",
    "status": 200
  },
  ...
]
    </pre>
    <p>Error Message (if no airports found):</p>
    <pre>
{
  "message": "No airports found in this state",
  "status": 404
}
    </pre>
    <p>This endpoint allows you to retrieve airports in a specific state.</p>
  </div>

  <div class="endpoint">
    <div class="title">6. Get Airport by Pincode</div>
    <p>Request:</p>
    <pre>GET /v1/airports/pincode/:pincode</pre>
    <p>Response:</p>
    <pre>
{
  "airport_code": "BLR",
  "airport_name": "Kempegowda International Airport",
  "city_name": "Bengaluru",
  "state_name": "Karnataka",
  "airport_type": "International",
  "pincode": "560300",
  "state_code": "KA",
  "message": "Success",
  "status": 200
}
    </pre>
    <p>Error Message (if not found):</p>
    <pre>
{
  "message": "Airport not found",
  "status": 404
}
    </pre>
    <p>This endpoint allows you to retrieve information for a specific airport by its pincode.</p>
  </div>

  <div class="endpoint">
    <div class="title">7. Get Airports by State Code</div>
    <p>Request:</p>
    <pre>GET /v1/airports/statecode/:statecode</pre>
    <p>Response:</p>
    <pre>
[
  {
    "airport_code": "DEL",
    "airport_name": "Indira Gandhi International Airport",
    "city_name": "New Delhi",
    "state_name": "Delhi",
    "airport_type": "International",
    "pincode": "110037",
    "state_code": "DL",
    "message": "Success",
    "status": 200
  },
  ...
]
    </pre>
    <p>Error Message (if no airports found):</p>
    <pre>
{
  "message": "No airports found for this state code",
  "status": 404
}
    </pre>
    <p>This endpoint allows you to retrieve airports in a specific state code.</p>
  </div>

  <div class="endpoint">
    <div class="title">8. Get Airports by Type</div>
    <p>Request:</p>
    <pre>GET /v1/airports/airporttype/:airporttype</pre>
    <p>Response:</p>
    <pre>
[
  {
    "airport_code": "DEL",
    "airport_name": "Indira Gandhi International Airport",
    "city_name": "New Delhi",
    "state_name": "Delhi",
    "airport_type": "International",
    "pincode": "110037",
    "state_code": "DL",
    "message": "Success",
    "status": 200
  },
  ...
]
    </pre>
    <p>Error Message (if no airports found):</p>
    <pre>
{
  "message": "No airports found",
  "status": 404
}
    </pre>
    <p>This endpoint allows you to retrieve airports based on their type (e.g., International, Domestic).</p>
  </div>

  <h2>Airline Endpoints</h2>

  <div class="endpoint">
    <div class="title">1. Get all Airlines</div>
    <p>Request:</p>
    <pre>GET /v1/airlines</pre>
    <p>Response:</p>
    <pre>
{
  "airlines": [...]
}
    </pre>
    <p>This endpoint retrieves a list of all airlines.</p>
  </div>

  <div class="endpoint">
    <div class="title">2. Get Airline by IATA Code</div>
    <p>Request:</p>
    <pre>GET /v1/airlines/code/:iata</pre>
    <p>Response:</p>
    <pre>
{
  "iata_code": "AI",
  "airline_name": "Air India",
  "message": "Success",
  "status": 200
}
    </pre>
    <p>Error Message (if not found):</p>
    <pre>
{
  "message": "Airline not found",
  "status": 404
}
    </pre>
    <p>This endpoint allows you to retrieve an airline's information by its IATA code.</p>
  </div>

  <div class="endpoint">
    <div class="title">3. Get Airline by Name</div>
    <p>Request:</p>
    <pre>GET /v1/airlines/name/:name</pre>
    <p>Response:</p>
    <pre>
{
  "iata_code": "AI",
  "airline_name": "Air India",
  "message": "Success",
  "status": 200
}
    </pre>
    <p>Error Message (if not found):</p>
    <pre>
{
  "message": "Airline not found",
  "status": 404
}
    </pre>
    <p>This endpoint allows you to retrieve an airline's information by its name.</p>
  </div>

  <footer>
    <p>For more information or questions, contact <a href="https://abhishekjainn.vercel.app" target="_blank">Abhishek Jain</a>.</p>
  </footer>
</body>
</html>

  `);
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
