# Green Api

> An API with Strapi

## Prerequisites

* Node : version 10 ans above
* Npm : version 6 and above
* MongoDB : version 3 and above
* Install dependencies : `yarn`

## Usage

``` bash
# Start Strapi admin & API
yarn start

# Commit using standard format
yarn commit
```

## FAQ

**Is there anything to do on MongoDb to use this project ?**

No. Just make sure MongoDb is up and running on the good environement, for example in dev env (specified in `config\environments\development\database.json`) `green-api` expect mongodb to run on `127.0.0.1:27017`. Then `green-api` will create a database if it does not exists, redirect you onto a registration page to create an admin account, then you'll be ready to use `green-api`.
