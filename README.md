# NodeJS Rest API example

I created this repo to learn and improve my NodeJS knowledge.

## Getting Started

`npm install` to install all necessary dependencies.


## Folder Structure

- `controllers` - This folder controls api requests and saves databases.
- `routes` - This folder contains our API's routes.
- `models` - This folder contains database models.
- `middlewares` - This folder contains middlewares for our API.
- `helpers` - This folder contains npm packages.
- `services` - This folder contains the Mongo Connection.


## Technologies

- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Morgan](https://github.com/expressjs/morgan)
- [JWT](https://jwt.io/)
- [BcryptJS](https://www.npmjs.com/package/bcryptjs)
- [Nodemailer](https://nodemailer.com/about/)

## Enviroment Variables

Create an env file and set your environment variables.

```
PORT

MONGO_URL

SECRET_KEY

SMTP_HOST
SMTP_PORT
SMTP_EMAIL
SMTP_PASS

```

After setting up everything, you can run the app.

To run:

`npm start`




