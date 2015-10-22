FROM node:4.1.2
MAINTAINER Eugene Pempel "eugene.pempel@gmail.com"

ENV TZ=Europe/Moscow
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN mkdir -p /var/www/verbose
WORKDIR /var/www/verbose

COPY package.json package.json
RUN npm install > /dev/null 2>&1

COPY .eslintrc .eslintrc
COPY webpack.config.js webpack.config.js
COPY bootstrap-sass.config.js bootstrap-sass.config.js

EXPOSE 3030
VOLUME /var/www/verbose/app
