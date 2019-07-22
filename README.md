# ubahn-shortest-path
API that shows the shortest path between stations for Munich UBahn

Libraries that this repository uses:

- Hapi
- Hapi-Swagger
- Mongodb
- Mocha (test)
- dotenv (.env file is only versioned for demo purposes)

## Pre-requisits

- Docker
- Docker Compose
- Port 3000 is free to use
- Port 27017 is free to use

## Starting the API

```
docker-compose up
```

## API Documentation

```
Open your browser at http://localhost:3000/documentation

Usage example:

1. Click on the button "Try it out"
2. Select "from" Hauptbahnhof (Central Station)
3. Select "to" Olympia-Einkaufszentrum
4. Click on the button "Execute"
5. Scroll-down to the "Server response" section
```

## Run unit tests

```
npm test
```

## End-point

- GET localhost:3000/munich/ubahn/from/{from}/to/{to} - Returns the shortest path from {from} to {to}

## TODO (I can't finish yet)

- Implement unit tests for the service
- Implement integration tests for the API