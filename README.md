# `eni-chat`

****

An anonymous peer-to-peer chat platform written in [Node.js](https://nodejs.org/en/) using [socket.io](https://scoket.io) .  
>Heroku app : https://eni-chat.herokuapp.com  

This application supports the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ git clone https://github.com/enigmaeth/eni-chat.git # or clone your own fork
$ cd eni-chat
$ npm install
$ npm start
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

## Deploying to Heroku

Make sure you have the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```
$ heroku create
$ git push heroku master
$ heroku ps:scale web=1
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
