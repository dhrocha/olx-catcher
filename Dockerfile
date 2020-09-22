FROM node:10
WORKDIR /app
COPY package.json /app
RUN yarn 
COPY . /app
CMD node src/main.js
EXPOSE 8080