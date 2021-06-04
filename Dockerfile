FROM node:16
ADD . /app
WORKDIR /app
EXPOSE 80 443 22
RUN npm install -g npm@7.16.0