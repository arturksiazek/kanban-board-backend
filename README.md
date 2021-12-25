# Kabnban-board backend

NodeJS/Express e-commerce REST API app for demonstration purposes

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

For MacOS with file sensitivity, add this option to docker compose mysql: `command: --lower_case_table_names=1`

-   Node - v14.16.0
-   NPM - v6.14.11
-   Docker - v20.10.7 (optional)

### Installing

From terminal

```
git clone git@github.com:arturksiazek/coffeecommerce-backend.git

# copy file and set proper data inside
cp .env.example .env

# install dependencies
yarn install

# run docker compose or install mysql and redis manually
docker-compose up -d --build

npm run db-setup

# other useful commands
npm run db-drop
npm run db-create
npm run db-migrate
npm run db-seed
npm run db-setup
npm run db-setup-fresh
```

## Development

```
yarn run dev
```

