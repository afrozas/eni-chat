FROM node:argon
MAINTAINER enigmaeth "enigmaeth@gmail.com"

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

COPY . /usr/src/app

EXPOSE 3000

CMD [ "node", "server.js" ]