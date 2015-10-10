FROM node:4.1.2
MAINTAINER Eugene Pempel "eugene.pempel@gmail.com"

RUN npm install --loglevel error --global gulp bower
RUN mkdir -p /var/www/verbose

ENV TZ=Europe/Moscow
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

VOLUME /var/www/verbose/src
WORKDIR /var/www/verbose

COPY package.json package.json
RUN npm install --loglevel error

COPY .bowerrc .bowerrc
COPY bower.json bower.json
RUN bower install --allow-root --quiet

COPY .eslintrc .eslintrc
COPY gulpfile.js gulpfile.js

EXPOSE 9005 35729
CMD ["gulp"]
