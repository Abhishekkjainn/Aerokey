# Airport API

Welcome to the **Airport API**! This API provides detailed information on airports and airlines in India, including airport codes, locations, types, airlines operating in India, and more. It allows developers to integrate essential aviation data into their applications, websites, or services.

### Author
**Abhishek Jain**  
Portfolio: [https://abhishekjainn.vercel.app](https://abhishekjainn.vercel.app)

### Base URL
All endpoints are accessible via the following base URL:
```
https://aerokey.vercel.app
```

## Table of Contents
- [Overview](#overview)
- [API Endpoints](#api-endpoints)
  - [Airports Endpoints](#airports-endpoints)
  - [Airlines Endpoints](#airlines-endpoints)
- [Request & Response Format](#request--response-format)
- [Error Handling](#error-handling)
- [Installation & Usage](#installation--usage)
- [License](#license)

## Overview
The **Airport API** serves two main categories of data:
1. **Airports** – Data on airports such as their codes, names, locations, types, and associated details.
2. **Airlines** – Information about airlines, including their IATA codes, names, and related data.

The API supports various endpoints to retrieve data based on specific criteria such as airport code, name, city, state, pincode, etc.

## API Endpoints

### Airports Endpoints

#### 1. Get All Airports
Retrieve a list of all airports.

- **Request:**
  ```
  GET /v1/airports
  ```

- **Response:**
  ```json
  {
    "total": 1000,
    "airports": [...],
    "message": "Success",
    "status": 200
  }
  ```

#### 2. Get Airport by Code
Retrieve airport details by airport code (IATA or ICAO).

- **Request:**
  ```
  GET /v1/airports/code/:code
  ```
  Replace `:code` with the airport code.

- **Response:**
  ```json
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
  ```

- **Error Response:**
  ```json
  {
    "message": "Airport not found",
    "status": 404
  }
  ```

#### 3. Get Airport by Name
Retrieve airport details by airport name.

- **Request:**
  ```
  GET /v1/airports/name/:name
  ```

- **Response:**
  ```json
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
  ```

- **Error Response:**
  ```json
  {
    "message": "Airport not found",
    "status": 404
  }
  ```

#### 4. Get Airport by City
Retrieve airport details by city name.

- **Request:**
  ```
  GET /v1/airports/city/:city
  ```

- **Response:**
  ```json
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
  ```

- **Error Response:**
  ```json
  {
    "message": "Airport not found",
    "status": 404
  }
  ```

#### 5. Get Airports by State
Retrieve airports in a specific state.

- **Request:**
  ```
  GET /v1/airports/state/:state
  ```

- **Response:**
  ```json
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
    }
  ]
  ```

- **Error Response:**
  ```json
  {
    "message": "No airports found in this state",
    "status": 404
  }
  ```

#### 6. Get Airport by Pincode
Retrieve airport details based on its pincode.

- **Request:**
  ```
  GET /v1/airports/pincode/:pincode
  ```

- **Response:**
  ```json
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
  ```

- **Error Response:**
  ```json
  {
    "message": "Airport not found",
    "status": 404
  }
  ```

#### 7. Get Airports by State Code
Retrieve airports in a specific state based on state code.

- **Request:**
  ```
  GET /v1/airports/statecode/:statecode
  ```

- **Response:**
  ```json
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
    }
  ]
  ```

- **Error Response:**
  ```json
  {
    "message": "No airports found for this state code",
    "status": 404
  }
  ```

#### 8. Get Airports by Type
Retrieve airports based on type (e.g., International, Domestic).

- **Request:**
  ```
  GET /v1/airports/airporttype/:airporttype
  ```

- **Response:**
  ```json
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
    }
  ]
  ```

- **Error Response:**
  ```json
  {
    "message": "No airports found",
    "status": 404
  }
  ```

### Airlines Endpoints

#### 1. Get All Airlines
Retrieve a list of all airlines.

- **Request:**
  ```
  GET /v1/airlines
  ```

- **Response:**
  ```json
  {
    "airlines": [...]
  }
  ```

#### 2. Get Airline by IATA Code
Retrieve airline details by its IATA code.

- **Request:**
  ```
  GET /v1/airlines/code/:iata
  ```

- **Response:**
  ```json
  {
    "iata_code": "AI",
    "airline_name": "Air India",
    "message": "Success",
    "status": 200
  }
  ```

- **Error Response:**
  ```json
  {
    "message": "Airline not found",
    "status": 404
  }
  ```

#### 3. Get Airline by Name
Retrieve airline details by its name.

- **Request:**
  ```
  GET /v1/airlines/name/:name
  ```

- **Response:**
  ```json
  {
    "iata_code": "AI",
    "airline_name": "Air India",
    "message": "Success",
    "status": 200
  }
  ```

- **Error Response:**
  ```json
  {
    "message": "Airline not found",
    "status": 404
  }
  ```

## Request & Response Format

### Request Format
All requests are made via HTTP GET. The request parameters are passed in the URL path or query string.

### Response Format
Responses are returned in JSON format. They include the following fields:
- `message`: A descriptive message about the request's success or failure.
- `status`: HTTP status code indicating the result of the request.

### Error Handling
The API will return appropriate HTTP error codes in case of issues. Common error responses include:
- `404 Not Found`: The resource (airport or airline) was not found.
- `500 Internal

 Server Error`: An unexpected server error occurred.

## Installation & Usage

### Prerequisites
- Node.js (version 12 or above)
- NPM or Yarn

### Clone the Repository
```bash
git clone https://github.com/Abhishekkjainn/Aerokey.git
cd Aerokey
```

### Install Dependencies
```bash
npm install
```

### Start the Server Locally
```bash
npm start
```

The API will be available at `http://localhost:3000`.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

