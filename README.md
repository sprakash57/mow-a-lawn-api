<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

<p align="center">A progressive node API solution bootstraped with Nest.js</p>


## Description

This application is a prototype to help a friend with his business. A user can register/login to the site and they can book the service. Based on the registeration they will get 20% new user coupon that will applied automatically at the checkout. Summary of some of the services given below -

To mow 1 square metre, the client will have to pay £1. 
a. If the area is bigger than 15 square metres, a discount of 10% will be applied. 
b. If the area is bigger than 25 square metres, a discount of 15% will be applied.

After booking they will have quote depicting the total amount.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

> Server will run on port 3000. To check the usage please follow openApi docs given below

# production mode
$ npm run start:prod
```

## OpenAPI documentaion

After you run the application you can access the API docs at `localhost:3000/api` in your browser.

## Technology Stack

- Nest.js
- Typescript
- Mongoose for MongoDB
- Swagger-UI
