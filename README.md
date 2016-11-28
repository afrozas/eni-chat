# `eni-chat`

****

An anonymous peer-to-peer chat platform written in [Node.js](https://nodejs.org/en/) using [socket.io](https://scoket.io) .  
>Heroku app : https://eni-chat.herokuapp.com  


## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
$ git clone https://github.com/enigmaeth/eni-chat.git # or clone your own fork
$ cd eni-chat
$ npm install
$ npm start
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

## Download, Build, Run

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
[![Deploy to Docker Cloud](https://files.cloud.docker.com/images/deploy-to-dockercloud.svg)](https://cloud.docker.com/stack/deploy/)



### How do I deploy eni-chat with Heroku?
You can easily deploy to Heroku by clicking the Deploy to Heroku button above. 

This application supports the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article .

To deploy using Heroku Toolbelt, clone the repository and change directory into it.
```
$ git clone https://github.com/enigmaeth/eni-chat.git 
$ cd eni-chat
$ heroku create
$ git push heroku master
$ heroku ps:scale web=1
$ heroku open
```


### How do I install eni-chat with Docker?
To pull the Docker image : 
```
$ docker pull enigmaeth/eni-chat
```




## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
