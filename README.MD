# How to start local environment (via Docker)

* install [Docker](https://docs.docker.com/install/)
* install [docker-compose](https://docs.docker.com/compose/install/)
* create `.env` file (see .env.example), change MONGO_*, MONGODB_* variables
* build images (every time, when you change code) `docker-compose build`
* start containers `docker-compose up` (`Ctrl + C` for stop)
* open http://127.0.0.1:3001 in your Web browser
* remove containers `docker-compose down`

# Add .env values
* add BOT_TOKEN to `.env` file
* add CLIENT_ID (discord) to `.env` file
* add API_URL to `.env` file

# Start
* npm run backend (via pm2) OR npm run start (wihtout daemon)