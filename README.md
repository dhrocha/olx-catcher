# Carbel-Group Backend Test

### Author: Daniel Rocha - rochadhc@gmail.com

## Technologies

- Node.js
- Express.js
- Axios
- Sqlite 3

## Installation

`git clone https://github.com/dhrocha/carbel-group.git`

`yarn`

## Run Server

`yarn start`

By default, server will be run in http://localhost:3000

## Get Data

Make a GET requisition to /getOlxData with JSON body like this

`{ "query": "sandero", "hoursPersistance": 1 }`

- query: the query string with car to be searched
- hoursPersistance: the number of hours to get cached data. If this number is 0, no cached data will be returned

In the first query string searched, by default, data results will be saved in database.

## Docker

Docker image of this app is available in Docker Hub. Run with:
`docker pull dhrocha/carbel-group-test:latest`
`docker run -p 3000:3000 --detach --name carbel dhrocha/carbel-group-test`
